import express from 'express'


const router = express.Router()

//routes
router.post('/create-product', requireSignIn,isAdmin, createProductController)

export default router 