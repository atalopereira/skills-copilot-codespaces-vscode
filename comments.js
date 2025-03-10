// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

// Add middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add comments
let comments = [
  {
    id: 1,
    name: 'John',
    comment: 'This is a comment'
  },
  {
    id: 2,
    name: 'Jane',
    comment: 'This is another comment'
  }
];

// Get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});