const User = require('../models/user');

module.exports.getUsers = (req, res) => {
    User.find({})
     .then(users => res.send({ data: users }))
     .catch((err) => {
        if (err.name == "ValidationError") {
            res.status (400).send({message: 'Invalid data'})
        }
        else if (err.name == 'CastError') {
            res.status(404).send ({message: 'Invalid request'})
        }
        else{
         res.status(500).send({ message: 'Error occured on the server' })
       }
     })
    };

 module.exports.getUser = (req, res) => {
     const { userId } = req.params;
     User.find({_id:userId})
     .then(users => res.send({ data: users }))
     .catch((err) => {
        if (err.name == "ValidationError") {
            res.status (400).send({message: 'Invalid data'})
        }
        else if (err.name == 'CastError') {
            res.status(404).send ({message: 'Invalid user ID'})
        }
        else{
         res.status(500).send({ message: 'Error occured on the server' })
       }
     })
    };
 
 module.exports.createUser = (req, res) => {
   const { name, about, avatar } = req.body;
   User.create({ name, about, avatar })
     .then(user => res.send({ data: user }))
     .catch((err) => {
        if (err.name == "ValidationError") {
            res.status (400).send({message: 'Invalid data'})
        }
        else if (err.name == 'CastError') {
            res.status(404).send ({message: 'Invalid request'})
        }
        else{
         res.status(500).send({ message: 'Error occured on the server' })
       }
     })
    };