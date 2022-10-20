//Express
import express from 'express';

//Controller
import { authUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', authUser);

export default router;
