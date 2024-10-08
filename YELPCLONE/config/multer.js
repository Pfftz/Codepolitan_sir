const multer = require("multer");
const path = require("path");
const fs = require("fs");
const ExpressError = require("../utils/ErrorHandler");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "public/images/";
        // Check if the directory exists
        if (!fs.existsSync(dir)) {
            // Create the directory if it doesn't exist
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(
            null,
            file.fieldname +
                "-" +
                uniqueSuffix +
                path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new ExpressError("Not an image! Please upload an image."), 405);
        }
    },
});

module.exports = upload;
