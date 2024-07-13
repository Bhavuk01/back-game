const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Alternatively, enable CORS with specific options
app.use(cors({
   origin: 'https://minesh.netlify.app/',
   methods: ['GET', 'POST'],
   allowedHeaders: ['Content-Type']
 }));

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
