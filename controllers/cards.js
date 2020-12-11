const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Error occured on the server' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
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

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'deleted successfully' }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Invalid data' });
      } else if (err.name === 'CastError') {
        res.status(404).send({ message: 'Invalid card id' });
      } else {
        res.status(500).send({ message: 'Error occured on the server' });
      }
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.send({ data: card.likes }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Invalid data' });
      } else if (err.name === 'CastError') {
        res.status(404).send({ message: 'Invalid card id' });
      } else {
        res.status(500).send({ message: 'Error occured on the server' });
      }
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.send({ data: card.likes }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Invalid data' });
      } else if (err.name === 'CastError') {
        res.status(404).send({ message: 'Invalid card id' });
      } else {
        res.status(500).send({ message: 'Error occured on the server' });
      }
    });
};
