const express = require('express');
const router = express.Router();
const uploads = require('../midelwares/uploads.js'); // Perbaiki typo 'midelwares' menjadi 'middlewares'
const videoController = require('../controller/videocontroller.js'); // Sesuaikan dengan nama file dan path

// Route untuk menambahkan video
router.post('/videos', 
    uploads.fields([{ name: 'video_file', maxCount: 10 }, { name: 'sampul_video', maxCount: 1 }]), 
    videoController.createVideo
); // Pastikan urutan middleware benar

// Route untuk mendapatkan semua video beserta file
router.get('/videos', videoController.getAllVideos);

// Route untuk mendapatkan video berdasarkan ID
router.get('/videos/:id', videoController.getVideoById);

// Route untuk mengedit video dan file terkait
router.put('/videos/:id', 
    uploads.fields([{ name: 'video_file', maxCount: 10 }, { name: 'sampul_video', maxCount: 1 }]), 
    videoController.updateVideo
); // Jangan lupa tambahkan middleware untuk upload jika perlu

// Route untuk menghapus video dan file terkait
router.delete('/videos/:id', videoController.deleteVideo);

module.exports = router;
