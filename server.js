const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: ['http://127.0.0.1:5500', 'https://minesh.netlify.app'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

const validKeys = ['your-key-1', 'your-key-2', 'your-key-3'];

app.post('/api/login', (req, res) => {
  const { key } = req.body;
  if (validKeys.includes(key)) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
