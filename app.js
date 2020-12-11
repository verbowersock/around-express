const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5fd37cfd40344651b0c33031', // paste the _id of the test user created in the previous step
  };

  next();
});

app.listen(PORT, () => {
});

app.use('/users', users);
app.use('/cards', cards);

app.use((req, res) => {
  res.status(404).json({ message: 'Page not found' });
});
