import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SidebarList from './SidebarList';
import { Link, useParams } from 'react-router-dom'; 

const PageDetailVideo = () => {
    const { id_video } = useParams();
    console.log("ID Video:", id_video); // Debugging
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getVideoByPk = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8082/api/videos/${id_video}`);
            console.log("Response Data:", response.data); // Debugging
            setVideo(response.data);
        } catch (error) {
            console.error('Error fetching video:', error.response ? error.response.data : error.message);
            setError('Terjadi kesalahan saat mengambil data video.');
        } finally {
            setLoading(false);
        }
    }, [id_video]);

    useEffect(() => {
        getVideoByPk();
    }, [getVideoByPk]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>{error}</div>; 
    }

    if (!video) {
        return <div>Video tidak ditemukan.</div>; 
    }

    return (
        <div className="dashboard">
            <SidebarList />
            <div className="content" style={{ backgroundColor: 'white', padding: '20px' }}>
                <h1 className="has-text-black text-center">Detail Video</h1>
                <div style={{ marginBottom: '20px' }}>
                    <Link to="/videos">
                        <button className="button is-warning">Kembali</button>
                    </Link>
                    <Link to="/add-videos">
                        <button className="button is-primary ml-3">Tambah Video</button>
                    </Link>
                </div>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Sub Judul</th>
                            <th>File Video</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {video.file.map((file, index) => (
                            <tr key={file.video_file}>
                                <td>{index + 1}</td>
                                <td>{file.sub_judul}</td>
                                <td>
                                    <video width="320" height="240" controls>
                                        <source src={file.video_file} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </td>
                                <td>
                                    <Link to={`/edit-videos/${file.video_file}`}>
                                        <button className="button is-small is-info">Edit</button>
                                    </Link>
                                    <button className="button is-small is-danger">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PageDetailVideo;
