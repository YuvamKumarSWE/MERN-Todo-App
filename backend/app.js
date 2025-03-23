//Imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const todoRouter = require('./routes/todoRouter');

//Setup
const app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


//Routes
app.use('/api/v1/todo', todoRouter);

//Exports
module.exports = app;