var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');

/***************************************
 * Create User Endpoint: Starter
***************************************/

router.post('/createuser', function(req, res) {
  var username = 'The Dude'; 
  var pass = 'therugtiedtheroomtogether';

  User.create({
    username: username,
    passwordhash: pass
  })
    .then(
      function createSuccess(user) {
        res.json({
          user: user,
          message: 'created'
        });
      },
      function createError(err) {
        res.send(500, err.message);
      }
    );
});

module.exports = router;