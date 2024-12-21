import { Router } from 'express';

import { validateLoginInput } from '../middleware/validationMiddleware.js';
import { register, login, logout } from '../controllers/authController.js';
import { validateRegisterInput } from '../middleware/validationMiddleware.js';
const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.get('/logout', logout)
export default router;
