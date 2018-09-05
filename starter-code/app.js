const express = require('express');
const app = express();

app.use(express.static('public'));

// our first Route
// HOME PAGE
app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/homepage.html');
});
// A photo gallery page
app.get('/gallery', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/gallery.html');
});
// ABOUT PAGE
app.get('/about', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/about.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});