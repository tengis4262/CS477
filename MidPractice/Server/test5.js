const express = require('express');
const fs = require('fs');
const app = express();

const DATABASE_FILE = 'database.txt';

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/signup', (req, res) => {
  const { fname, lname } = req.body;

  if (!fname || !lname) {
    res.status(400).send('Firstname and lastname are required');
  } else {
    const userData = `${fname}=${lname},`;
    fs.appendFile(DATABASE_FILE, userData, (err) => {
      if (err) {
        console.error('Error writing to database:', err);
        res.status(500).send('Failed to save user information');
      } else {
        res.status(200).send('Saved successfully');
      }
    });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
