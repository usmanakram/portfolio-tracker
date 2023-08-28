require('dotenv').config();
require('./db')();

const http = require('http');
const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');

const schema = require('./schema/schema');
// const routesInit = require('./routes/init');

const app = express();
const server = http.createServer(app);

app.use(
  '/graphql',
  createHandler({ schema })
);

// // Initialize routes
// routesInit(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
