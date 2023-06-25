import express from 'express'
import { authUser,logoutUser,registerUser,updateUserProfile,getUserProfile } from '../controllers/userController.js';
import { protect } from '../Middleware/authMiddleware.js';

const router = express.Router();

router.post('/auth',authUser)
router.post('/',registerUser)
router.post('/logout',logoutUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile) //wrapp 2 routes with the same name

export default router;