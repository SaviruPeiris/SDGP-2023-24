const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')
const i18n = require("i18n");
const logger = require('../utils/log4jsutil');
const AppError = require('../utils/app.error');
const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       
        const uploadPath = path.resolve(__dirname, './../../../Cognicarefrontend/public');
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// @desc    Authenticate a user
// @route   GET /api/v1/users
// @access  Public

const getUsers = asyncHandler(async (req, res) => {
    logger.trace("userController] :: getUsers() : Start"); 
    const users = await User.find().select('-password');
    res.status(200).json(users);
    logger.trace("[userController] :: getUsers() : End"); 
});

// @desc    Get user by ID
// @route   GET /api/v1/users/:id
const getUserById = asyncHandler(async (req, res) => {
    logger.trace("[userController] :: getUserById() : Start");

    const userId = req.params.id;

    const user = await User.findById(userId).select('-password');

    if (!user) {
        logger.error("[userController] :: getUserById() : User not found");
        throw new AppError(404, i18n.__("ERROR_USER_NOT_FOUND"));
    }

    res.status(200).json(user);
    logger.trace("[userController] :: getUserById() : End"); 
});

// @desc    create a user
// @route   POST /api/v1/users
// @access  Public
const createUser = asyncHandler(async (req, res) => {
    logger.trace("[userController] :: createUser() : Start");

    const { userName, email, password } = req.body

    if ( !userName || !email || !password ) {
        logger.error("[userController] :: createUser() : Missing required field");
        throw new AppError(401, i18n.__("ERROR_MISSING_REQUIRED_FIELDS"))
    }


    const userNameRegex = /^[^\s]{4,100}$/;
    if (!userNameRegex.test(userName)) {
        logger.error("[userController] :: createUser() : Invalid username format");
        throw new AppError(402, i18n.__("ERROR_INVALID_USERNAME_FORMAT"));
    }

    const userExists = await User.findOne({ userName })

    if (userExists) {
        logger.error("[userController] :: createUser() : Username already exists");
        throw new AppError(403, i18n.__("ERROR_USER_ALREADY_EXISTS"))
    }

    const emailRegex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z]{2,6})$/;

    if (!emailRegex.test(email)) {
        logger.error("[userController] :: createUser() : Invalid email format");
        throw new AppError(404, i18n.__("ERROR_INVALID_EMAIL_FORMAT"));
    }

    const salt = await bcrypt.genSalt(10)
    const hashsedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: hashsedPassword,
        status: "NEW",
    })

    if (user) {
        res.status(200).json(user)
    } else {
        logger.error("[userController] :: createUser() : User is not created properly");
        throw new AppError(500, i18n.__("APPLICATION_ERROR"))
    }

    logger.trace("[userController] :: createUser() : End");
})

// @desc    edit a user
// @route   PUT /api/v1/users/:id
// @access  Private
const editUser = asyncHandler(async (req, res) => {
    logger.trace("[projectController] :: editUser() : Start");

    const userId = req.params.id;
    const currentUser = userId;

    if (!userId) {
        logger.error("[userController] :: editUser() : user id is a must");
        throw new AppError(400, i18n.__("UNAUTHORIZED"));
    }

    let updates = {
        ...(req.body.userName !== null && req.body.userName != "" && { userName: req.body.userName }),
        ...(req.body.email !== null && req.body.email != "" && { email: req.body.email }),
    };
    updates.firstName = req.body.firstName;
    updates.lastName = req.body.lastName;
    updates.gender = req.body.gender;
    updates.age = req.body.age;
    updates.existingDiseases = req.body.existingDiseases;
    updates.currentMedications = req.body.currentMedications;

    const userNameRegex = /^[^\s]{4,100}$/;
    if (!userNameRegex.test(updates.userName)) {
        logger.error("[userController] :: editUser() : Invalid username format");
        throw new AppError(400, i18n.__("ERROR_INVALID_USERNAME_FORMAT"));
    }

    if (updates.userName !== undefined) {
        const userNameExists = await User.find({
            userName: updates.userName,
            _id: { $ne: currentUser }
        });

        if (userNameExists.length > 0) {
            logger.error("[userController] :: editUser() : Username already exists");
            throw new AppError(400, i18n.__("ERROR_USER_ALREADY_EXISTS"));
        }
    }

    const emailRegex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z]{2,6})$/;
    if (!emailRegex.test(updates.email)) {
        logger.error("[userController] :: editUser() : Invalid email format");
        throw new AppError(400, i18n.__("ERROR_INVALID_EMAIL_FORMAT"));
    }
  
    
        
    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

    if (!updatedUser) {
        logger.error("[userController] :: editUser() : No users with the given id");
        throw new AppError(404, i18n.__("USER_NOT_FOUND"));
    }

    res.status(200).json(updatedUser);
    logger.trace("[userController] :: editUser() : End");
    
});
const uploadFile = asyncHandler(async (req, res) => {
    const userId = req.params.id;

    if (!userId) {
        logger.error("[userController] :: uploadFile() : user id is a must");
        throw new AppError(400, i18n.__("UNAUTHORIZED"));
    }

    upload.fields([
        { name: 'prescriptionPhoto', maxCount: 1 },
        { name: 'mriScanPhoto', maxCount: 1 }
    ])(req, res, async function (err) {
        try {
            if (err) {
                logger.error("[userController] :: uploadFile() : Error uploading files");
                throw new AppError(400, "Error uploading files");
            }
        
            // Check if prescriptionPhoto field exists in the request object
            if (!req.files || !req.files['prescriptionPhoto'] || req.files['prescriptionPhoto'].length === 0) {
                logger.error("[userController] :: uploadFile() : Prescription photo file not uploaded");
                throw new AppError(400, "Prescription photo file not uploaded");
            }
        
            // Check if mriScanPhoto field exists in the request object
            if (!req.files || !req.files['mriScanPhoto'] || req.files['mriScanPhoto'].length === 0) {
                logger.error("[userController] :: uploadFile() : MRI scan photo file not uploaded");
                throw new AppError(400, "MRI scan photo file not uploaded");
            }
        
            const prescriptionPhoto = req.files['prescriptionPhoto'][0].path;
            const mriScanPhoto = req.files['mriScanPhoto'][0].path;
        
            const updates = {
                prescriptionPhoto: prescriptionPhoto,
                mriScanPhoto: mriScanPhoto
            };
        
            const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
        
            if (!updatedUser) {
                logger.error("[userController] :: uploadFile() : No users with the given id");
                throw new AppError(404, i18n.__("USER_NOT_FOUND"));
            }
        
            res.status(200).json(updatedUser);
            logger.trace("[userController] :: uploadFile() : End");
        } catch (err) {
            // Handle errors within Multer middleware callback
            res.status(err.statusCode || 500).json({ message: err.message });
        }
    });
});



module.exports = {
    createUser,
    getUsers,
    getUserById,
    editUser,
    uploadFile

}