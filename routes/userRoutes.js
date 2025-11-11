const express = require('express');
const userRouter = express.Router();  //creates a modular group of handlers.
const userController = require('../controllers/userController');

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/:id',userController.getUserById);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;