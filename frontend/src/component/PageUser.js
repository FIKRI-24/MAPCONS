import SidebarList from './SidebarList';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PageUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/user');
      setUser(response.data); 
      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching user!:', error); // Tangani error
    }
  };
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <SidebarList />

      {/* Content Area */}
      <div className="content" style={{ backgroundColor: 'white', padding: '20px' }}>
        <h1 className="has-text-black">Daftar User</h1>
        
        {/* Button Add Video */}
        <div style={{ marginBottom: '20px' }}>
          <button className="button is-primary">Add User</button>
        </div>

        {/* Tabel Data User */}
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Telp</th>
              <th>Level</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
          {user.map((user, index) => (
            <tr key={user.id_user}> 
              <td>{index + 1}</td>
              <td>{user.nama}</td>
              <td>{user.email}</td> 
              <td>{user.telp}</td> 
              <td>{user.profil}</td> 
              <td>{user.level}</td> 
              <td>
              <Link to={`/edit-user/${user.id_user}`}>
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

export default PageUser