//Imports
const app = require('./app');
const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

// DB connection
const DB = process.env.MONGO_URI;
mongoose.connect(DB).then(
    () => {console.log('DB connected bitches!!'); }
).catch(
    (e) => {console.log('Oh no DB not connecting you dumbass cuz : ', e);}
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});