const { Testi } = require('../models'); // Pastikan path ke model benar

// Fungsi untuk membuat testimoni baru
exports.createTesti = async (req, res) => {
    try {
        // Cek apakah file sampul ada dalam request
        const sampulTesti = req.file ? req.file.filename : null;

        // Buat URL untuk sampul jika ada file yang di-upload
        const sampulUrl = sampulTesti ? `${req.protocol}://${req.get('host')}/uploads/${sampulTesti}` : null;

        // Data yang akan disimpan ke database
        const testiData = {
            ...req.body, // Semua data dari req.body
            sampul: sampulUrl // Menyimpan URL lengkap sampul
        };

        // Membuat testimoni baru
        const newTesti = await Testi.create(testiData);
        return res.status(201).json(newTesti);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Terjadi kesalahan saat membuat testimoni' });
    }
};

// Fungsi untuk memperbarui testimoni
exports.updateTesti = async (req, res) => {
    try {
        const { id } = req.params;

        // Cek apakah file sampul ada dalam request
        const sampulTesti = req.file ? req.file.filename : null;

        // Buat URL untuk sampul jika ada file baru yang di-upload
        const sampulUrl = sampulTesti ? `${req.protocol}://${req.get('host')}/uploads/${sampulTesti}` : null;

        // Data yang akan diperbarui
        const testiData = {
            ...req.body, // Semua data dari req.body
            sampul: sampulUrl || req.body.sampul // Gunakan sampul yang di-upload atau tetap yang lama
        };

        const [updated] = await Testi.update(testiData, {
            where: { id_testi: id }
        });

        if (!updated) {
            return res.status(404).json({ message: 'Testimoni tidak ditemukan' });
        }

        return res.status(200).json({ message: 'Testimoni berhasil diperbarui' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui testimoni' });
    }
};

// Fungsi untuk menghapus testimoni
exports.deleteTesti = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Testi.destroy({
            where: { id_testi: id }
        });

        if (!deleted) {
            return res.status(404).json({ message: 'Testimoni tidak ditemukan' });
        }

        return res.status(200).json({ message: 'Testimoni berhasil dihapus' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Terjadi kesalahan saat menghapus testimoni' });
    }
};
