const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Tentukan folder penyimpanan
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Gunakan timestamp untuk nama file
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        'image/jpeg', 
        'image/png', 
        'image/gif', 
        'application/pdf', 
        'video/mp4', 
        'video/avi', 
        'video/mov'
    ];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // File diizinkan
    } else {
        cb(new Error('Hanya gambar, file PDF, dan video yang diizinkan!'), false);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = upload;
