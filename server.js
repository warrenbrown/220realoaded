const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const api = require('./server/routes/api');

const config = require('./config/database');
//declare instance of express app and port number
const app = express();
const port = 3000;

//connect to database
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('unable to connect to database', err);
  } else {
    console.log('connected to database: ' + config.db)
  }
})

//declare middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);app.get('/', (req, res) => {
  res.send('Welcome to my blog');
});

app.listen(port);
console.log('server is running at http://localhost:' + port);
