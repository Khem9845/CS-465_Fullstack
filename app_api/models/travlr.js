const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code:        { type: String, required: true, index: true },
  name:        { type: String, required: true, default: '' },
  length:      { type: String, required: true, default: '' },
  start:       { type: Date,   required: true, default: Date.now },
  resort:      { type: String, required: true, default: '' },
  perPerson:   { type: String, required: true, default: '0' },
  image:       { type: String, required: true, default: '' },
  description: { type: String, required: true, default: '' },
});

const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;