const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models'); 
const path = require('path'); 

const app = express();

// Middleware untuk memudahkan parsing request body (JSON dan URL-encoded)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware CORS (untuk mengizinkan akses dari domain yang berbeda)
app.use(cors());

// Menyajikan file statis dari folder 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Simple route untuk tes
app.get('/', (req, res) => {
  res.json({ message: 'Selamat datang di aplikasi API kami!' });
});

// Import dan gunakan routes
const userRoutes = require('./routes/usersroutes.js'); 
app.use('/api/users', userRoutes); 

const videoRoutes = require('./routes/videoroutes.js');
app.use('/api', videoRoutes);

const kelasRoutes = require('./routes/tb_kelasroutes.js');
app.use('/api', kelasRoutes);

// Import dan gunakan routes Testimoni
const testiRoutes = require('./routes/tb_testiroutes.js'); // Pastikan path sesuai
app.use('/api', testiRoutes);

const tbEbookRoutes = require('./routes/tb_ebookroutes.js');
app.use('/api/ebooks', tbEbookRoutes);

// Port dimana server akan dijalankan
const PORT = process.env.PORT || 8082;

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}.`);
});

// Sinkronisasi database dan jalankan server
db.sequelize.sync().then(() => {
  console.log('Database berhasil disinkronisasi.');
}).catch(err => {
  console.error('Gagal sinkronisasi database:', err.message);
});
