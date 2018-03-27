var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

router.get('/', (req, res) => {
  res.send('Hey! This is a test route!')
});

router.get('/about', (req, res) => {
  res.send('This is an about route!')
})

router.get('/contacts', (req, res) => {
  let contact = {
    user: 'Kenn',
    email: 'k@k.com'
  }
  res.send(contact)
})

router.get('/projects', (req, res) => {
  let project = [
    'Proj 1',
    'Proj 2'
  ]
  res.send(project)
})

router.get('/mycontacts', (req, res) => {
  let myContact = [
    {
      user: 'Qunicy',
      email: 'q@q.com'
    },
    {
      user: 'Aaron',
      email: 'a@a.com'
    },
    {
      user: 'Carolyn',
      email: 'c@c.com'
    }
  ]
  res.send(myContact)
})

/***************************************
 * Controller Method #1: Simple Response
***************************************/

router.post('/one', function(req, res) {
  res.send('Test one went through!')
});

/***************************************
 * Controller Method #2: Persisting Data
***************************************/

router.post('/two', function(req, res) {
  let testData = 'Test data for endpoint two';

  TestModel
    .create({
      testdata: testData
    })
  res.send('Test two went through!')
});

/***************************************
 * Controller Method #3: Req.Body
***************************************/

router.post('/three', function(req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData 
    })
  res.send('Test three went through!')
  console.log('Test three went through!')
});

/***************************************
 * Controller Method #4: Crafting the Response
***************************************/

router.post('/four', function(req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData 
    })
    .then(
      function message() {
        res.send('Test four went through!')
      }
    );
});

/***************************************
 * Controller Method #5: Return Data in a Promise
***************************************/

router.post('/five', function(req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(data) {
        res.send(data); 
      }
    );
});

/***************************************
 * Controller Method #6: Return Response as JSON
***************************************/

router.post('/six', function(req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) {
        res.json({
          testdata: testdata
        }); 
      }
    );
});

/***************************************
 * Controller Method #7: Error Handling
***************************************/

router.post('/seven', function(req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
        res.json({
          testdata: testdata
        }); 
      },
      function createError(err) {
        res.send(500, err.message);
      }
    );
});

module.exports = router;