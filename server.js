
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/lessons', (req, res) => {
  res.json([
    { title: 'Introduction to Aleph Zero', content: 'Basics of Aleph Zero.' },
    { title: 'Smart Contracts with Ink!', content: 'Building smart contracts.' },
  ]);
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
