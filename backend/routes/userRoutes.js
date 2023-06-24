import express from 'express'
import { authUser,logoutUser,registerUser,updateUserProfile,getUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/auth',authUser)
router.post('/',registerUser)
router.post('/logout',logoutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile) //wrapp 2 routes with the same name

export default router;