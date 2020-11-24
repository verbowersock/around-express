const router = require('express').Router();
const path = require('path');
const fs = require('fs');

module.exports = router;

const filePath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/', (req, res) => {
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(404).json({ message: 'Resource not found' });
      return;
    }
    const users = JSON.parse(data);
    res.send(users);
  });
});

router.get('/:id', (req, res) => {
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(404).Json({ message: 'Resource not found' });
      return;
    }
    const users = JSON.parse(data);
    const { id } = req.params;
    const user = users.filter((u) => u._id === id);
    if (user[0]) {
      res.send(user);
    } else {
      res.status(404).json({ message: 'User ID not found' });
    }
  });
});
