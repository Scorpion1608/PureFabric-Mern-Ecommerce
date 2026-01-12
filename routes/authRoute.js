import express from 'express';
import { 
    registerController, 
    loginController,
    testController,
} from '../controllers/authController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerController);

//login
router.post('/login', loginController);

//test routing 
router.get('/test', requireSignIn, isAdmin, testController);

export default router;