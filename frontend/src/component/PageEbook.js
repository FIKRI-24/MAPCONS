import SidebarList from './SidebarList';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PageEbook = () => {

  const [ebook, setEbook] = useState([]);

  useEffect(() => {
    getEbook();
  }, []);

  const getEbook = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/ebook');
      setEbook(response.data); 
      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching ebook:', error); // Tangani error
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <SidebarList />

      {/* Content Area */}
      <div className="content" style={{ backgroundColor: 'white', padding: '20px' }}>
        <h1 className="has-text-black">Daftar E-Book</h1>
        
        {/* Button Add E-Book */}
        <div style={{ marginBottom: '20px' }}>
          <Link to="/add-ebook">
            <button className="button is-primary">Add E-Book</button>
          </Link>
        </div>

        {/* Tabel Data E-Book */}
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Deskripsi</th>
              <th>Sampul</th>
              <th>File E-Book</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
          {ebook.map((ebook, index) => (
            <tr key={ebook.id_ebook}> 
              <td>{index + 1}</td>
              <td>{ebook.judul_ebook}</td>
              <td>{ebook.deskripsi_ebook}</td>
              <td>
                <img src={ebook.sampul_ebook} alt="Sampul" width="100" />
              </td>
              <td>{`Rp ${ebook.ebook_file}`}</td> 
              <td>{`Rp ${ebook.harga_ebook}`}</td> 
              <td>
              <Link to={`/edit-ebook/${ebook.id_ebook}`}>
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
  )
}

export default PageEbook