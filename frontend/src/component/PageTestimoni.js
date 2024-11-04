import SidebarList from './SidebarList';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PageTestimoni = () => {
  const [testimoni, setTestimoni] = useState([]);

  useEffect(() => {
    getTestimoni();
  }, []);

  const getTestimoni = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/testimoni');
      setTestimoni(response.data); 
      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching class:', error); 
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <SidebarList />

      {/* Content Area */}
      <div className="content" style={{ backgroundColor: 'white', padding: '20px' }}>
        <h1 className="has-text-black text-center">Daftar Testimoni / Feedback</h1>
        
        {/* Button Add Video */}
        <div style={{ marginBottom: '20px' }}>
          <button className="button is-primary">Add Testimoni</button>
        </div>

        {/* Tabel Data Testimoni */}
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Sampul</th>
              <th>Feedback</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {testimoni.map((testi, index) => (
              <tr key={testi.id_testi}> 
                <td>{index + 1}</td>
                <td>{testi.nama_peserta}</td>
                <td>
                  <img src={testi.profil} alt="Sampul" width="100" />
                </td>
                <td>{testi.testimoni  }</td> 
                <td>
                  <Link to={`/edit-testi/${testi.id_testi}`}>
                    <button className="button is-small is-info">Edit</button>
                  </Link>
                  <button 
                  // onClick={() => handleDeleteClick(testi.id_testi)}
                  className="button is-small is-danger">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
      </div>
    </div>
  )
}

export default PageTestimoni