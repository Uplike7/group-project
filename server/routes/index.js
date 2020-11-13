// modules required for routing
let express = require('express');
let router = express.Router();
//let mongoose = require('mongoose');

// define the game model
//let survey = require('../models/survey');
let indexController = require('../controllers/index');

/* GET home page. wildcard */
router.get('/', indexController.displayHomePage);

/* GET home page. wildcard */
router.get('/home', indexController.displayHomePage);


router.get('/add', indexController.displayAddPage); 


router.post('/add', indexController.processAddPage); 


router.get('/edit/:id', indexController.displayEditPage);


router.post('/edit/:id', indexController.processEditPage);


router.get('/delete/:id', indexController.performDelete);




module.exports = router;
