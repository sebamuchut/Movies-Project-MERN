const express = require("express");
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const path = require('path')
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database');

// settings
server.set("port", process.env.PORT || 3000);

// middlewares
server.use(morgan('dev'));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));

server.use(cors())

server.use('/', routes)

server.use(express.static(path.join(__dirname, '/public')));

dbConnection().then(() => {
  server.listen(server.get("port"), () => {
    console.log(`server running on port ${server.get("port")}`);
  });
});

module.exports = server;