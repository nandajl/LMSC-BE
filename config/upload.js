const multer = require("multer");
const path = require("path");

// Menentukan tempat penyimpanan file
const publicDirectory = path.join(__dirname, "..", "resources");
const uploadDirectory = path.join(publicDirectory, "upload");

// Mendefinisikan gimana cara nyimpen file-nya
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },

  filename: function (req, file, cb) {
    console.log("file", file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "-" + file.originalname
    );
  },
});

// Membuat upload middleware
module.exports = multer({ storage });
