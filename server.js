const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });


// Middleware to serve static files from the 'public' folder
app.use(express.static('public'));

// Middleware to parse JSON body
app.use(express.json());

// Simple route for handling messages
app.post('/upload', upload.single('file'), (req, res) => {
    console.log('File uploaded:', req.file.originalname);
    res.send('File uploaded successfully');
});

app.post('/send-message', (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);
  res.send('Message received');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
