const express = require('express'),
  router = express.Router();

const {
  createUsers,
  getAllUsers,
  updateUsers,
  deleteUser,
} = require('../controllers/users.controller');

router.get('/', getAllUsers);
router.post('/', createUsers);
router.put('/:id', updateUsers);
router.delete('/:id', deleteUser);

module.exports = router;
