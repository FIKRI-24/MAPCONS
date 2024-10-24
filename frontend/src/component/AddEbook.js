import React from 'react'
import SidebarList from './SidebarList'
import { Link } from 'react-router-dom'

const AddEbook = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <SidebarList/>
        
      <div className="content" style={{ padding: '30px' }}>
            <Link to="/ebook">
                <button className="button is-warning">Kembali</button>
            </Link>
        </div>
    </div>
  )
}

export default AddEbook