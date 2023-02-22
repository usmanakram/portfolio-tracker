require('dotenv').config();
require('./db')();

const http = require('http');
const express = require('express');

const routesInit = require('./routes/init');

const app = express();
const server = http.createServer(app);

// Initialize routes
routesInit(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
