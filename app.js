const express = require('express');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js');

const { PORT = 3000} = process.env;

const app = express();
app.use(express.static(__dirname + '/public'))

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`)
})

app.use('/users', users);
app.use('/cards', cards)

app.use(function(req, res) {
  res.status(404).json({"message" :"Page not found"})
})
