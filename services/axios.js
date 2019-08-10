const axios = require('axios');
const keys = require('../config/keys');

module.exports = axios.create({
  baseURL: 'https://api.fortnitetracker.com/v1/',
  headers: { 'TRN-Api-Key': keys.fortnite }
});
