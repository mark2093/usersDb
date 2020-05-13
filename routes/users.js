const express = require('express');
const router = express.Router();

const { 
  getUsers,
  getUsersById,
  createUser,
  deleteUser,
  updateUser, } = require('../controller/user');

router.get('', getUsers);
router.get('/:userId', getUsersById);
router.post('', createUser);

router.patch('/:userId', updateUser);

router.delete('/:userId',deleteUser);

module.exports = router;