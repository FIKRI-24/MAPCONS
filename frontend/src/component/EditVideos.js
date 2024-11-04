import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import SidebarList from './SidebarList';
import axios from 'axios';

const EditVideos = () => {
    const { id } = useParams(); // Mengambil id dari URL
    const navigate = useNavigate(); // Untuk navigasi setelah edit
    const [videoDetail, setVideoDetail] = useState(null);
    const [subJudul, setSubJudul] = useState('');
    const [videoFile, setVideoFile] = useState(null);

    useEffect(() => {
        const getVideoDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8082/api/videos/${id}`);
                console.log("Response data:", response.data);
                setVideoDetail(response.data);
                setSubJudul(response.data.sub_judul);
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };

        getVideoDetail();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('sub_judul', subJudul);
        if (videoFile) {
            formData.append('video_files', videoFile);
        }

        try {
            await axios.put(`http://localhost:8082/api/videos/${id}`, formData);
            alert('Video updated successfully');
            navigate('/videos');
        } catch (error) {
            console.error('Error updating video:', error);
            alert('Failed to update video');
        }
    };

    if (!videoDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <SidebarList />
            <div className="content" style={{ backgroundColor: 'white', padding: '20px' }}>
                <Link to="/video">
                    <button className="button is-warning">Kembali</button>
                </Link>
                <h1 className="has-text-black text-center">Form Edit Video (Detail)</h1>
                
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Sub Judul</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={subJudul}
                                onChange={(e) => setSubJudul(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">File Video</label>
                        <div className="control">
                            <input
                                type="file"
                                className="input"
                                onChange={(e) => setVideoFile(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <button type="submit" className="button is-primary">Update Video</button>
                </form>
            </div>
        </div>
    );
};

export default EditVideos;
