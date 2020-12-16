const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Invalid data' });
      } else if (err.name === 'ValidationError') {
        res.status(404).send({ message: 'Invalid request' });
      } else {
        res.status(500).send({ message: 'Error occured on the server' });
      }
    });
};

module.exports.getUser = (req, res) => {
  const { userId } = req.params;
  User.findOne({ _id: userId })
    .then((user) => {
      if (user) {
        res.send({ data: user });
      }
      res.status(404).send({ message: 'User ID not found' });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Invalid ID' });
      } else {
        res.status(500).send({ message: 'Error occured on the server' });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Invalid data' });
      } else if (err.name === 'CastError') {
        res.status(404).send({ message: 'Invalid request' });
      } else {
        res.status(500).send({ message: 'Error occured on the server' });
      }
    });
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'User ID not found' });
      }
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        res.status(400).send({ message: 'Invalid data' });
      } else {
        res.status(500).send({ message: 'Error occured on the server' });
      }
    });
};

module.exports.updateAvatar = (req, res) => {
  // eslint-disable-next-line max-len
  User.findByIdAndUpdate(req.user._id, { avatar: req.body.avatar }, { runValidators: true, new: true })
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'User ID not found' });
      }
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        res.status(400).send({ message: 'Invalid data' });
      } else {
        res.status(500).send({ message: 'Error occured on the server' });
      }
    });
};
