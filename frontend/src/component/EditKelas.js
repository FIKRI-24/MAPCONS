import React from 'react'
import SidebarList from './SidebarList'
import { Link } from 'react-router-dom'

const EditKelas = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <SidebarList/>
        
      <div className="content" style={{ padding: '30px' }}>
            <Link to="/kelas">
                <button className="button is-warning">Kembali</button>
            </Link>
            <h2 className='text-center'>Form Edit Kelas</h2>
        </div>
        </div>
  )
}

export default EditKelas