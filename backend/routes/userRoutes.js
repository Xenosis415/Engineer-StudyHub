import express from 'express';
const Router = express.Router();
import { registerUser } from '../controllers/userController.js';

Router.post('/register', registerUser);

export default Router; 
