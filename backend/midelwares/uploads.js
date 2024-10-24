const multer = require('multer');
const path = require('path'); // Tambahkan ini

// Konfigurasi penyimpanan menggunakan multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Tentukan folder penyimpanan
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Gunakan timestamp untuk nama file
    }
});

// Filter untuk hanya mengizinkan gambar dan file PDF
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf']; // Jenis file yang diizinkan
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // File diizinkan
    } else {
        cb(new Error('Hanya gambar dan file PDF yang diizinkan!'), false); // File tidak diizinkan
    }
};

// Inisialisasi multer dengan pengaturan di atas
const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = upload;
