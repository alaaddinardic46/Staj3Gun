// api.js - API route'larını yönlendiren router
const express = require('express');
const router = express.Router();

// Basit bir API endpoint
router.get('/greet', (req, res) => {
  res.send('Merhaba, API!');
});

// Kullanıcılar API'si
router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Ayşe' }
  ]);
});

// Router'ı dışa aktarıyoruz
module.exports = router;
