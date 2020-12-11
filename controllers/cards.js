const Card = require('../models/card');

module.exports.getCards = (req, res) => {
    Card.find({})
     .then(cards => res.send({ data: cards }))
     .catch(() => res.status(500).send({ message: 'Error occured on the server' }));
 };

 module.exports.createCard = (req, res) => {
   const { name, link } = req.body;
   Card.create({ name, link, owner:req.user._id })
     .then(card => res.send({ data: card }))
     .catch(() => res.status(500).send({ message: 'Error occured on the server' }));
 }

 module.exports.deleteCard = (req, res) => {
    Card.findByIdAndRemove(req.params.id)
    .then(user => res.send({ "message":"deleted successfully" }))
    .catch(err => res.status(500).send({ message: 'Error' }));
}

 