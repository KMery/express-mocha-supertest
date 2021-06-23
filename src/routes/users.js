const { Router } = require('express');
const router = Router();
const { getAllUsers, getUserById, addUser } = require('../controllers/users.js')

//GET all users
router.get('/', getAllUsers);

//GET an user by ID (U0001 is the test)
router.get('/:id', getUserById);

//POST new user
router.post('/', addUser);

module.exports = router;