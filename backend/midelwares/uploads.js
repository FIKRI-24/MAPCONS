const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan untuk multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Pastikan folder 'uploads/' ada
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Menambahkan timestamp untuk menghindari nama file duplikat
    }
});

// Filter untuk memvalidasi jenis file
const fileFilter = (req, file, cb) => {
    // Izinkan hanya gambar dan video
    const filetypes = /jpeg|jpg|png|gif|mp4|avi|mkv/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Hanya gambar dan video yang diizinkan!'));
    }
};

// Inisialisasi multer dengan konfigurasi storage dan file filter
const uploads = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // Batas ukuran file 10MB
});

module.exports = uploads;
