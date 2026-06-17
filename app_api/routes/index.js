const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// JWT Authentication middleware
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (authHeader == null) {
    return res.sendStatus(401);
  }
  const token = authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      return res.sendStatus(401);
    }
    req.auth = verified;
  });
  next();
}

// Auth routes
router.post('/login', authController.login);
router.post('/register', authController.register);

// Trip routes
router
  .get('/trips', tripsController.tripsList)
  .post('/trips', authenticateJWT, tripsController.tripsAddTrip);

router
  .get('/trips/:tripCode', tripsController.tripsFindByCode)
  .put('/trips/:tripCode', authenticateJWT, tripsController.tripsUpdateTrip);

module.exports = router;