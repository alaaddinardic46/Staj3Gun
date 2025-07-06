// server.js - Server'ı başlatıyoruz
const express = require('express');
const app = express();
const port = 3000;

// API dosyasındaki router'ı import ediyoruz
const apiRoutes = require('./api'); // api.js dosyasındaki API route'larını buraya dahil ediyoruz

// '/api' yolundaki tüm istekleri apiRoutes'a yönlendiriyoruz
app.use('/api', apiRoutes);  // '/api' ile başlayan istekler apiRoutes tarafından karşılanacak

// Server'ı başlatıyoruz
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor!`);
});
