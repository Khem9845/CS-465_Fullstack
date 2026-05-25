const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/travlr';

const connect = () => {
  setTimeout(() =>
    mongoose.connect(dbURI), 1000);
};

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
  connect();
});

connect();
module.exports = mongoose;