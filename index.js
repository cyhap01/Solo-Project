//----REACT FRONT END-----------
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render(<App />, document.getElementById('root'));





//----------EXPRESS BACKEND----------

const express = require('express'); //getting express server
const mongoose = require('mongoose'); //mongoose to connect to mongoDB
const app = express(); //get server
//const Entry = require('./models/entry.model.js'); //importing Entry schema
const entryRoute = require('./Routes/entry.route.js');

//------------ROUTE HANDLERS/ CRUD FUNCTIONALITY--------------------
//MIDDLEWARE----------
app.use(express.json()); //to use middleware
app.use(express.urlencoded({ extended: false })); //for forms

//ROUTES-----------------
app.use('/api/entries', entryRoute);

//INITIALIZATION------------
app.get('/', (req, res) => {
  res.send('Hello Christopher Yhap');
});

//---------------CONNECTING TO DATABASE AND SERVER--------------------------

mongoose //connecting to DB
  .connect(
    'mongodb+srv://admin:0CgyY4VUOiGbyGrV@journals.xnrov.mongodb.net/?retryWrites=true&w=majority&appName=Journals'
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Failed to connect to MongoDB');
  });

/*
pswd: 0CgyY4VUOiGbyGrV
username: admin

JSON chrome extension 51.

transpiler converts one file of code to another for the browser to understand; eg Babel, converts to JS
model bundle- takes a bunch of files and bundles them and loads then in a correct order eg webpack

*/
