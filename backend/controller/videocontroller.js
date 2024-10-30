const db = require('../models'); // Pastikan path sesuai dengan struktur folder
const { Video, VideoFile } = db;

// Menyimpan video baru
exports.createVideo = async (req, res) => {
    const { judul_video, keterangan_video, harga_video } = req.body;

    // Validasi input
    if (!judul_video) {
        return res.status(400).json({ message: 'Judul video is required' });
    }

    try {
        // Membuat entri video baru
        const newVideo = await Video.create({
            judul_video,
            keterangan_video,
            harga_video,
            sampul_video: req.files['sampul_video'] ? req.files['sampul_video'][0].path : null,
        });

        // Menyimpan file video ke tabel VideoFile
        const videoFiles = req.files['video_file']; // Ambil files dari req.files
        if (videoFiles && videoFiles.length > 0) {
            const videoFilePromises = videoFiles.map(file => {
                const videoUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`; // URL untuk video

                return VideoFile.create({
                    id_video: newVideo.id_video, // ID video baru yang dibuat
                    sub_judul: file.originalname,
                    video_file: videoUrl, // Simpan URL video
                });
            });

            await Promise.all(videoFilePromises); // Tunggu semua promises selesai
        }

        res.status(201).json({ message: 'Video added successfully', video: newVideo });
    } catch (error) {
        console.error('Error adding video:', error);
        res.status(500).json({ message: 'Error adding video', error: error.message });
    }
};

// Mendapatkan semua video beserta file terkait
exports.getAllVideos = async (req, res) => {
    try {
        const videos = await Video.findAll({
            include: {
                model: VideoFile,
                as: 'file', // Pastikan menggunakan alias 'file' sesuai yang didefinisikan
            },
        });
        res.status(200).json(videos);
    } catch (error) {
        console.error('Error retrieving videos:', error);
        res.status(500).json({ message: 'Error retrieving videos', error: error.message });
    }
};

// Mendapatkan video berdasarkan ID
exports.getVideoById = async (req, res) => {
    const videoId = req.params.id.trim(); // Bersihkan ID

    try {
        const video = await Video.findOne({
            where: { id_video: videoId }, // Gunakan nama kolom yang benar
            include: [
                {
                    model: VideoFile,
                    as: 'file', // Pastikan ini sesuai dengan definisi relasi
                },
            ],
        });
        
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }
        
        return res.json(video);
    } catch (error) {
        console.error('Error retrieving video:', error);
        return res.status(500).json({ message: 'Error retrieving video' });
    }
};

// Edit Video
exports.updateVideo = async (req, res) => {
    const { id } = req.params;
    const { judul_video, keterangan_video, harga_video } = req.body;
    const videoFiles = req.files['video_file']; // Ambil files dari req.files berdasarkan nama field

    try {
        const video = await Video.findByPk(id);
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        video.judul_video = judul_video;
        video.keterangan_video = keterangan_video;
        video.harga_video = harga_video;

        await video.save();

        const sampulVideoFile = req.files['sampul_video'];
        if (sampulVideoFile && sampulVideoFile.length > 0) {
            const sampulUrl = `${req.protocol}://${req.get('host')}/uploads/${sampulVideoFile[0].filename}`;
            await video.update({ sampul_video: sampulUrl }); // Menyimpan URL sampul video
        }

        if (videoFiles && videoFiles.length > 0) {
            // Hapus file lama
            await VideoFile.destroy({ where: { id_video: id } });

            const videoFilePromises = videoFiles.map(file => {
                // Buat URL untuk video
                const videoUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
                
                return VideoFile.create({
                    id_video: id,
                    sub_judul: file.originalname,
                    video_file: videoUrl, // Simpan URL video
                });
            });

            await Promise.all(videoFilePromises);
        }

        res.status(200).json({ message: 'Video updated successfully', video });
    } catch (error) {
        console.error('Error updating video:', error);
        res.status(500).json({ message: 'Error updating video', error: error.message });
    }
};

// Hapus Video
exports.deleteVideo = async (req, res) => {
    const { id } = req.params;

    try {
        const video = await Video.findByPk(id);
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        await VideoFile.destroy({ where: { id_video: id } });
        await video.destroy();

        res.status(200).json({ message: 'Video and related files deleted successfully' });
    } catch (error) {
        console.error('Error deleting video:', error);
        res.status(500).json({ message: 'Error deleting video', error: error.message });
    }
};
