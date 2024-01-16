/* import asyncHandler from '../middleware/asyncHandler'
import User from '../models/userModel'

//@desc Fetch all products
 //@route GET / api/ products
 //@access Public

const authUser = asyncHandler(async (req,res) => {
 res.send('auth user')
})

//@desc Register user
 //@route Post/api/users
 //@access Public

const registerUser = asyncHandler(async (req,res) => {
 res.send('register user')
})
//@desc Register user
 //@route Post/api/users/Logout
 //@access Private

const LogOutUser = asyncHandler(async (req,res) => {
 res.send(' ')
})
//@desc get all profile
 //@route GET/api/users/profile
 //@access Private

const getUserProfile = asyncHandler(async (req,res) => {
 res.send('get user profile')
})




const updateUserProfile = asyncHandler(async (req,res) => {
 res.send('update user profile')

})

const updateUser = asyncHandler(async (req,res) => {
 res.send('update user')

})

const getUsers = asyncHandler(async (req,res) => {
 res.send('get User')
})
const getUserById = asyncHandler(async (req,res) => {
 res.send('get User by Id')
})
const deleteUser = asyncHandler(async (req,res) => {
 res.send('delete users')
})

export {
    authUser,
    registerUser,
    LogOutUser,
    getUserById,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
} */