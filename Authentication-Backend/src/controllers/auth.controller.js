const bcrypt = require('bcryptjs')
const asyncHanlder = require('express-async-handler')
const User = require('../models/user.model')
const i18n = require("i18n");
const logger = require('../utils/log4jsutil.js');
const AppError = require('../utils/app.error');
const s3Util = require('../utils/s3.util.js');
const constants = require("./../utils/constants");



// @desc    Authenticate a user
// @route   POST /api/v1/auth
// @access  Public

//for handling asynchronous errors
const authenticate = asyncHanlder(async (req, res) => {
  logger.trace("[authController] :: authenticate() : Start");

  //getting username and password from request body
  const { userName, password } = req.body;

  //finding the particular user
  let user = await User.findOne({ userName });

  //if the user dosent exsit
  if (!user) {
    logger.error(
      "[authController] :: authenticate() : Username does not exists"
    );
    throw new AppError(501, i18n.__("ERROR_USER_DOES_NOT_EXISTS"));
  }

  if (await bcrypt.compare(password, user.password)) {
    if (user.profileImage) {
      try {
        user.profileImage = await s3Util.generateProfileImagePresignedURL(
          user.profileImage
        );
      } catch (err) {}
    }

    //sending user details
    const authresponse = await User.findById(user._id).select("-password");
    res.status(200).json({
      user: authresponse,
      status: constants.USER_STATUS.ACTIVE,
    });
  } else {
    //if the password dosent match
    logger.error("[authController] :: authenticate() : Unauthorized user");
    throw new AppError(401, i18n.__("UNAUTHORIZED"));
  }

  logger.trace("[authController] :: authenticate() : End");
})





module.exports = {
    authenticate,
}
