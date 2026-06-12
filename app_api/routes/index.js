const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router
  .get('/trips', tripsController.tripsList)
  .post('/trips', tripsController.tripsAddTrip);

router
  .get('/trips/:tripCode', tripsController.tripsFindByCode)
  .put('/trips/:tripCode', tripsController.tripsUpdateTrip);

module.exports = router;