const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser');

const router = require('./routes/users.route');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', router);

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.use((request, response, next) => {
  response.status(404);
  response.send(`<h1>this is error code</h1>`);
});

app.use((error, request, response, next) => {
  response.status(505).json({
    message: 'something wrong in the page please reload',
  });
});

module.exports = app;
