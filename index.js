const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Christopher Yhap');
});
mongoose
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
