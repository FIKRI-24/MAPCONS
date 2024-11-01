import React from 'react';
import '../../landing.css'; 
import Navbar from './Navbar';
import poster from '../../img/poster.jpg';
import personal1 from '../../img/personal1.png';
import personal2 from '../../img/personal2.png';
import personal3 from '../../img/personal3.png';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div>
      <Navbar />
       
      {/* Banner Section */}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner_content">
                  <h2 className="mt-4 mb-2">
                    Belajar AutoCAD dari Dasar hingga Mahir!
                  </h2>
                  <p>
                    Apakah Anda ingin menguasai AutoCAD untuk kebutuhan desain teknis, arsitektur, teknik sipil, mekanikal, dan elektrikal? Belajarlah bersama kami!
                  </p>
                  <div>
                  <Link to="/daftar-kelas" className="primary-btn mt-5 mb-sm-0 me-3">
                      <i className="bi bi-list"></i> Lihat Daftar Kelas
                  </Link>
                  <a href="courses.php" className="primary-btn mt-3 mb-sm-0">
                      <i class="bi bi-play-circle"></i> Lihat Daftar Video & E-Book
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="card_section">
        <div className="container card-container">
          <div className="row">
            <div className="col-md-4">
              <div className="card-item">
                <div className="card-icon">
                  <i className="fas fa-user"></i>
                </div>
                <div className="card-content">
                  <h4>400.000</h4>
                  <p>Pengguna</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-item">
                <div className="card-icon">
                  <i className="fas fa-video"></i> 
                </div>
                <div className="card-content">
                  <h4>50</h4>
                  <p>Video Pembelajaran</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-item">
                <div className="card-icon">
                  <i className="fas fa-graduation-cap"></i> 
                </div>
                <div className="card-content">
                  <h4>230</h4>
                  <p>Kelas Terpadu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kelas Section */}
      <section className="kelas">
        <div className="container">
          <h2 className="text-center">Kelas / Produk Terpopuler</h2>
          <p>
            Kami menawarkan kelas yang dirancang khusus untuk meningkatkan keahlian teknik Anda. Baik Anda mencari pengetahuan dasar atau ingin mendalami topik spesifik, kami punya solusinya.
          </p>
        </div>
      </section>

      {/* Row menampilkan kelas populer */}
      <section className="video_section mb-5">
        <div className="container">
          <div className="row video">
            <div className="col-md-4">
              <h4 className="text-center mb-2">Kelas</h4>
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video1.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
            <div className="col-md-4">
              <h4 className="text-center mb-2">E-Book</h4>
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video2.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
            <div className="col-md-4">
              <h4 className="text-center mb-2">Video</h4>
              <img src={poster} alt="Logo" className="poster-image" />
              <h4 className="mt-2 mb-2">Kelas 3D Autocad</h4>
              <div className="d-flex justify-content-between">
                <a href="detail_video3.php" className="btn-detail">Detail</a>
                <p className="text-danger">Rp. 499.000</p>
              </div>
            </div>
          </div>
          <div className="text-center btn-akses">
            <a href="detail_video1.php" className="btn-detail2 mx-2">
              <i className="fas fa-video mr-1"></i> Akses Video & E-Book
            </a>
            <a href="detail_video2.php" className="btn-detail2 mx-2">
              <i className="fas fa-user-plus mr-1"></i> Daftar Kelas
            </a>
          </div>
        </div>        
      </section>

      <section>
        <div className="container about" id="about-us">
        <h2 className="text-center">Tentang Kami</h2>
          <p>
          Metro Indonesian Software dan MEPCONS SolusiCAD telah bekerja sama untuk menghadirkan pendidikan teknik yang berkualitas tinggi. Dengan pengalaman panjang dalam dunia teknik dan pendidikan, kami berkomitmen untuk menyediakan pembelajaran yang mendalam dan praktis bagi semua peserta. Dari teori hingga praktik, kami memastikan bahwa setiap materi yang kami tawarkan relevan dengan kebutuhan industri saat ini.
          </p>
        <div class="row text-center mt-5 ">
          <div class="col-lg-4 col-md-6">
            <div class="image-box">
            <img src={personal1} alt="Logo" className="poster-image" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="image-box">
            <img src={personal2} alt="Logo" className="poster-image" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="image-box">
            <img src={personal3} alt="Logo" className="poster-image" />
            </div>
          </div>
          </div>
          </div>
      </section>
      
      {/* Section Manfaat */}
      <section className="manfaat">
        <div className="container">
          <h2 className="text-center">Kenapa Memilih Kami?</h2>
          <p className="text-center mb-5">Manfaat yang Anda Dapatkan</p>
          <div className="row">
            {/* Baris pertama dengan 3 card */}
            <div className="col-lg-4 col-md-6">
              <div className="single_feature text-center">
                <div className="icon">
                <i className="fas fa-graduation-cap"></i>
                </div>
                <h4 className="mt-3 mb-2">Pengajaran oleh Para Ahli</h4>
                <p className="text-light">Semua pengajar kami adalah profesional berpengalaman di bidang teknik, siap membimbing Anda melalui materi yang komprehensif.</p><br/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_feature text-center">
                <div className="icon"><i className="fas fa-book"></i></div>
                <h4 className="mt-3 mb-2">Materi yang Selalu Diperbarui</h4>
                <p className="text-light">Kami selalu memperbarui materi kami agar sesuai dengan perkembangan terbaru di industri teknik, memastikan Anda mendapatkan informasi yang paling relevan.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_feature text-center">
                <div className="icon"><i className="fas fa-globe"></i></div>
                <h4 className="mt-3 mb-2">Akses Fleksibel</h4>
                <p className="text-light">Belajar dengan kecepatan Anda sendiri. Akses video, ebook, dan kelas kapan saja dan di mana saja.</p><br/>
              </div>
            </div>
          </div>

          {/* Baris kedua dengan 2 card */}
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6">
              <div className="single_feature text-center">
                <div className="icon"><i className="fas fa-users"></i></div>
                <h4 className="mt-3 mb-2">Komunitas yang Mendukung</h4>
                <p className="text-light">Bergabunglah dengan komunitas profesional teknik yang aktif dan berdedikasi untuk terus belajar dan berkembang bersama.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single_feature text-center">
                <div className="icon"><i className="fas fa-certificate"></i></div>
                <h4 className="mt-3 mb-2">Sertifikasi Resmi</h4>
                <p className="text-light">Dapatkan sertifikat resmi yang diakui setelah menyelesaikan kursus dan ujian yang disediakan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testi" id="testimoni">
        <div className="container">
          <h2 className="text-center">Apa Kata Mereka?</h2>
          <p className="text-center mb-5">Dengarkan kisah sukses dari para peserta yang telah meningkatkan keahlian mereka bersama kami.</p>
        </div>
      </section>

        <section>
          <Footer/>
        </section>
    </div>
  );
};

export default LandingPage;
