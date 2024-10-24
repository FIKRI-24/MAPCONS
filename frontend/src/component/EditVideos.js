import React from 'react'
import SidebarList from './SidebarList'
import { Link } from 'react-router-dom'

const EditVideos = () => {
  return (
    <div className="dashboard">
        {/* Sidebar */}
        <SidebarList />
        <div className="content" style={{ backgroundColor: 'white', padding: '20px' }}>
            <Link to="/videos">
                    <button className="button is-warning">Kembali</button>
            </Link>
            <h1 className="has-text-black text-center">Form Edit Video (Detail)</h1>
            
        </div>
    </div>
  )
}

export default EditVideos