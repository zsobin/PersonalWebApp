var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

// Set up the app's routing
app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/projects', function(request, response) {
  response.render('pages/projects');
});

app.get('/courses', function(request, response) {
  response.render('pages/courses');
});
app.get('/projects/maintenancenotif', function(request, response) {
  response.render('pages/eportfolio/scmaintenancenotif');
});
app.get('/projects/shoop', function(request, response) {
  response.render('pages/eportfolio/shoop');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
