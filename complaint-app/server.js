const express = require('express');
const fs = require('fs');
const path = require('path');
const multer  = require('multer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files (uploads and index.html)
app.use(express.static(path.join(__dirname)));

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  },
});

const upload = multer({ storage });

// Route to handle GET request for complaints
app.get('/complaints', (req, res) => {
  fs.readFile('./complaints.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load complaints data.' });
    }
    res.json(JSON.parse(data));
  });
});

// Route to handle POST request for new complaints
app.post('/complaints', upload.single('image'), (req, res) => {
  const { title, email, description } = req.body;

  if (!title || !email || !description) {
    return res.status(400).json({ error: 'Missing required fields: title, email, description.' });
  }

  // Read the existing complaints data
  fs.readFile('./complaints.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read complaints data.' });
    }

    const complaints = JSON.parse(data);

    // Create a new complaint object
    const newComplaint = {
      id: complaints.length + 1,
      title,
      email,
      description,
      imagePath: req.file ? req.file.path : '', // Save the file path if an image is uploaded
      submittedAt: new Date().toISOString(),
    };

    // Add the new complaint to the array
    complaints.push(newComplaint);

    // Write the updated array back to the JSON file
    fs.writeFile('./complaints.json', JSON.stringify(complaints, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save complaint.' });
      }
      res.status(201).json(newComplaint);
    });
  });
});

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
