const express = require('express');
const mongoose = require('mongoose');
const app = express(); //get server
const Entry = require('./models/entry.model.js'); //importing Entry schema

app.use(express.json); //to use middleware

//INITIALIZATION------------
app.get('/', (req, res) => {
  res.send('Hello Christopher Yhap');
});

//GETTING ALL Entries ------------

app.get('/api/entries', async (req, res) => {
  try {
    const entries = await Entry.find(req.body);
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//POSTING----------
app.post('/api/entries', async (req, res) => {
  try {
    const entry = await Entry.create(req.body);
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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



*/
