const path = require('path');

const express = require('express');

const hospitalController = require('../controllers/hospital');

const router = express.Router();
router.get('/' , hospitalController.getIndex)
router.get('/location' , hospitalController.getLocation)
router.get('/locationName' , hospitalController.getLocationName)
router.post('/locationName' , hospitalController.postLocationName)
router.post('/doctors-details' , hospitalController.postDoctors)
// router.get('/doctors-details' , hospitalController.getDoctors)
router.get('/doctors-details' , hospitalController.getDoctorsList)
router.get('/login', hospitalController.getLogin )
router.post('/location', hospitalController.postLogin )
module.exports = router;