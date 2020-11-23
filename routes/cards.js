const router = require('express').Router();
const path = require('path');
const fs = require('fs');

module.exports = router;

const filePath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/', (req, res)=> {
  fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
    if (err) {
      res.status(404).json({message: 'Resource not found'});
      return;
    }
     const cards = JSON.parse(data);
     res.send(cards)
    })
  })