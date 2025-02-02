import AdminList from "./component/AdminList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PageVideo from "./component/PageVideo";
import PageEbook from "./component/PageEbook";
import PageKelas from "./component/PageKelas";
import PageUser from "./component/PageUser";
import PageTestimoni from "./component/PageTestimoni";
import PageTransaksi from "./component/PageTransaksi";
import AddVideo from "./component/AddVideo";
import AddVideos from "./component/AddVideos";
import PageDetailVideo from "./component/PageDetailVideo";
import EditVideo from "./component/EditVideo";
import EditTestimoni from "./component/EditTestimoni";
import AddKelas from "./component/AddKelas";
import EditKelas from "./component/EditKelas";
import EditEbook from "./component/EditEbook";
import AddEbook from "./component/AddEbook";
import EditVideos from "./component/EditVideos";
import AddTestimoni from "./component/AddTestimoni";
import LandingPage from "./component/landing/LandingPage";
import DaftarKelas from "./component/see/DaftarKelas";
import DaftarVideo from "./component/see/DaftarVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminList/>}/>
        <Route path="/video" element={<PageVideo/>}/>
        <Route path="/ebook" element={<PageEbook/>}/>
        <Route path="/kelas" element={<PageKelas/>}/>
        <Route path="/user" element={<PageUser/>}/>
        <Route path="/testimoni" element={<PageTestimoni/>}/>
        <Route path="/transaksi" element={<PageTransaksi/>}/>
        <Route path="/videos/:id" element={<PageDetailVideo/>}/>

        {/* add */}
        <Route path="/add-video" element={<AddVideo/>}/>
        <Route path="/edit-video/:id" element={<EditVideo/>}/>
        
        {/* dihalaman Detail Video */}
        <Route path="/add-videos/:id" element={<AddVideos />} />
        <Route path="/edit-videos/:id" element={<EditVideos/>}/>

        {/* Kelas */}
        <Route path="/edit-kelas/:id" element={<EditKelas/>}/>
        <Route path="/add-kelas" element={<AddKelas/>}/>

        {/* E-Book */}
        <Route path="/edit-ebook/:id" element={<EditEbook/>}/>
        <Route path="/add-ebook" element={<AddEbook/>}/>

        {/* Testimoni */}
        <Route path="/add-testi" element={<AddTestimoni/>}/>
        <Route path="/edit-testimoni/:id" element={<EditTestimoni />} />

        {/* Landing Page */}
        <Route path="/landing-page" element={<LandingPage/>}/>
        <Route path="/daftar-kelas" element={<DaftarKelas/>}/>
        <Route path="/daftar-video" element={<DaftarVideo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
