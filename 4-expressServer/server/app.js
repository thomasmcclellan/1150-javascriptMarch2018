var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');

var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();
// sequelize.sync({ force: true });



// app.use('/api/test', (req, res) => {
//   res.send('This is data from the /api/test endpoint.  It is from the server.');
// });

app.use(bodyParser.json());

app.use('/test', test);

app.listen(3000, () => {
  console.log('App is listening on 3000');
});