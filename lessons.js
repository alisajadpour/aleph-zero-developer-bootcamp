
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { title: 'Introduction to Aleph Zero', content: 'Aleph Zero ecosystem overview' },
    { title: 'Smart Contracts with Ink!', content: 'Building smart contracts on Aleph Zero' },
  ]);
});

module.exports = router;
