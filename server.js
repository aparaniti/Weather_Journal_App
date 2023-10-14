const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

// Serve the static files from the "website" folder
app.use(express.static('website'));

let projectData = {}; // Initialize an empty object to store data

// GET route to return projectData
app.get('/data', (req, res) => {
  res.send(projectData);
});

// POST route to add data to projectData
app.post('/data', (req, res) => {
  const { temperature, date, userResponse } = req.body;
  projectData = {
    temperature,
    date,
    userResponse,
  };
  res.send(projectData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});