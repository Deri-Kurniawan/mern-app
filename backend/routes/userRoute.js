const express = require('express');
const router = express.Router();
const {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/Users');

router.get('/', getAllUser);
router.post('/', createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;