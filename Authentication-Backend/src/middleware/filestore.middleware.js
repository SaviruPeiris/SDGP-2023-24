const multer = require('multer');
// Configuring storage settings for multer
const storage = multer.diskStorage({
   // Setting the destination directory where uploaded files will be stored

    destination: function (req, file, cb) {
        cb(null, 'backend/src/files/') 
    },
     // Setting the filename for the uploaded file
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
// Creating an instance of multer with the configured storage settings
const upload = multer({ storage: storage });

module.exports = upload;
