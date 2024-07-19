// index.js
const express = require('express');
const logger = require('./middleware/logger');
const app = express();
const port = 3000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const usersRouter = require('./routes/users');

// Use the logging middleware
app.use(logger);

// Middleware for parsing JSON bodies
app.use(express.json());

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use the users router
app.use('/users', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
