/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
const mongooes = require('mongoose');
mongooes.Promise = global.Promise;

const schema = mongooes.Schema;
const userSchema = new schema({
  gender: String,
  name: {
    title: String,
    first: String,
    last: String,
  },
  location: {
    street: String,
    city: String,
    state: String,
    postcode: String,
  },
  email: String,
  dob: String,
  registered: String,
  phone: String,
  cell: String,
  id1: {
    name: String,
    value: String,
  },
  nat: String,
});
module.exports = mongooes.model('User', userSchema);
