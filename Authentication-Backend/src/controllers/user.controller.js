const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')
const i18n = require("i18n");
const logger = require('../utils/log4jsutil');
const AppError = require('../utils/app.error');


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

    const userId = req.body.userId 

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
        status: "NEW"
    })


    if (user) {
        res.status(200).json(user)
    } else {
        logger.error("[userController] :: createUser() : User is not created properly");
        throw new AppError(500, i18n.__("APPLICATION_ERROR"))
    }

    logger.trace("[userController] :: createUser() : End");
})




module.exports = {
    createUser,
    getUsers,
    getUserById

}