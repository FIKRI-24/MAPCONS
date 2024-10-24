const express = require('express');
const router = express.Router();
const testiController = require('../controller/tb_testicontroller.js');
const uploads = require('../midelwares/uploads.js'); 

// Route untuk Testimoni
router.post('/testimoni', uploads.single('sampul'), testiController.createTesti); // Upload sampul saat create
router.put('/testimoni/:id', uploads.single('sampul'), testiController.updateTesti); // Upload sampul saat update
router.delete('/testimoni/:id', testiController.deleteTesti); // Delete

module.exports = router;
