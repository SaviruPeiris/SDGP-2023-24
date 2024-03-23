const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user.controller')
const upload = require('../../middleware/filestore.middleware');

router.post('/',  userController.createUser)
router.get('/',  userController.getUsers)
router.get('/:id', userController.getUserById)
router.put('/:id' , userController.editUser)
router.put('/file/:id' , userController.uploadFile)


module.exports = router;