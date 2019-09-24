const mongoose = require('mongoose');
const express = require('express')
const connectDB = require('./config/db');

const app = express();

// connect database
//connectDB();

// connect to mongodb
mongoose.connect('mongodb://localhost/');

// Init Middleware
app.use(express.json({extended: false }));

// define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


mongoose.connection.once('open',function(){
  console.log('Connection has been made!');
}).on('error', function(error){
  console.log('Connection error', error);
});
