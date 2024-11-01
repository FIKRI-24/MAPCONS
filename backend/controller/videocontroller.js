const db = require('../models');
const { Video, VideoFile } = db;

// Menyimpan video baru
exports.createVideo = async (req, res) => {
    const { judul_video, keterangan_video, harga_video } = req.body;

    if (!judul_video) {
        return res.status(400).json({ message: 'Judul video is required' });
    }

    try {
        const sampulVideoUrl = req.files['sampul_video']
            ? `${req.protocol}://${req.get('host')}/uploads/${req.files['sampul_video'][0].filename}`
            : null;

        const newVideo = await Video.create({
            judul_video,
            keterangan_video,
            harga_video,
            sampul_video: sampulVideoUrl,
        });

        const videoFiles = req.files['video_file'];
        if (videoFiles && videoFiles.length > 0) {
            const videoFilePromises = videoFiles.map(file => {
                const videoUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;

                return VideoFile.create({
                    id_video: newVideo.id_video,
                    sub_judul: file.originalname,
                    video_file: videoUrl,
                });
            });

            await Promise.all(videoFilePromises);
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
                as: 'file',
                attributes: ['id_file', 'id_video', 'sub_judul', 'video_file'], // Tampilkan id_file dan atribut lain
            },
        });
        res.status(200).json(videos);
    } catch (error) {
        console.error('Error retrieving videos:', error);
        res.status(500).json({ message: 'Error retrieving videos', error: error.message });
    }
};

// Mendapatkan video berdasarkan ID
exports.getDetailVideo = async (req, res) => {
    const videoId = req.params.id_video.trim(); // Ganti sesuai parameter ID

    try {
        const video = await Video.findOne({
            where: { id_video: videoId },
            include: [
                {
                    model: VideoFile,
                    as: 'file', // Sesuaikan dengan alias di asosiasi
                    attributes: ['sub_judul', 'video_file'], // Hanya ambil sub_judul dan video_file
                },
            ],
        });
        
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        // Mengubah respons untuk hanya menampilkan sub_judul dan video_file
        const responseData = {
            id_video: video.id_video,
            file: video.file.map(f => ({
                sub_judul: f.sub_judul,
                video_file: f.video_file
            }))
        };
        
        return res.json(responseData);
    } catch (error) {
        console.error('Error retrieving video:', error);
        return res.status(500).json({ message: 'Error retrieving video' });
    }
};


// Edit Video
exports.updateVideo = async (req, res) => {
    const { id } = req.params;
    const { judul_video, keterangan_video, harga_video } = req.body;
    const videoFiles = req.files['video_file'];

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
            await video.update({ sampul_video: sampulUrl });
        }

        if (videoFiles && videoFiles.length > 0) {
            await VideoFile.destroy({ where: { id_video: id } });

            const videoFilePromises = videoFiles.map(file => {
                const videoUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
                
                return VideoFile.create({
                    id_video: id,
                    sub_judul: file.originalname,
                    video_file: videoUrl,
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
/////