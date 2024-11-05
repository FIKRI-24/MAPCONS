import React from 'react'
import Nav from './Nav';
import poster from '../../img/poster.jpg';
import Footer from '../landing/Footer';

const DaftarKelas = () => {
  return (
    <div>
      <Nav/>

      <section className="daftar-kelas">
        <div className="container">
          <div className="card-full">
            <div className="card-content-see">
              <h1 className="card-title-see">Daftar Video</h1>
              <p className="card-subtitle text-center">
              Kelas ini dirancang untuk memberikan pemahaman mendalam tentang teknik terbaru, dipandu oleh pengajar berpengalaman dari MEPCONS. Anda bisa memilih untuk mengikuti seluruh kelas, atau hanya membeli materi video dan ebook sesuai kebutuhan Anda. Pilih paket yang sesuai dengan kebutuhan Anda. Dapatkan diskon khusus jika membeli materi video dan ebook sekaligus, atau ikuti seluruh kelas untuk pengalaman belajar yang lengkap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* content */}
      <section>
        <div className="container search">
        <form method="POST" action="" class="input-group mb-3">
              <input type="text" name="search" placeholder="Cari kelas..." class="form-control rounded"/>
              <button type="submit" class="btn btn-outline-primary">Cari</button>
            </form>
        </div>
      </section>

      <section className="video_section mb-5">
        <div className="container">
          <div className="row video mt-5">
            <div className="col-md-4">
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video1.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video2.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video3.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video3.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video3.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video3.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video3.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video3.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
          </div>
        </div>        
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default DaftarKelas