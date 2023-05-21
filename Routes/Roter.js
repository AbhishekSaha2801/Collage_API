//for using route we have to import express which have the functionality of route
const router = require('express').Router();

//Import all the Logics for creating , getting the data from database
const {CreateCollageDetails} = require('../Controllers/CreateCollageDetails');
const {getAllDetails} = require('../Controllers/getAllDetails');
const {getSingleCollage} = require('../Controllers/getSingleCollageDetails');

//now we can create route
router.post('/create/collage/details',CreateCollageDetails);//Creating data into Database
router.get('/get/collages/details',getAllDetails);//Fetching data from Database
router.get('/get/singleCollage/detils/:id',getSingleCollage);//Fetching single data from Database

module.exports = router;