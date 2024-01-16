/* import express from 'express'
const router = express.Router()
 import { getProductById,getProducts } from '../Controller/productController'
 
 router.route('/').get(getProducts)
 router.route('/:id').get(getProductById)

export default router; */



import express from 'express'

const router = express.Router();

import {
    authUser,
    registerUser,
    LogOutUser,
    getUserById,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    updateUser,
} from '../Controller/userController.js'


router.route('/').post(registerUser).get(getUsers)
router.post('/logout',LogOutUser)
router.post('/login',authUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser)


export default router