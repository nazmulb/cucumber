const {setDefaultTimeout} = require('cucumber');

//Use dotenv to read .env vars into Node
require('dotenv').config();

setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);