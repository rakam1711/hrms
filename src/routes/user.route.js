const express = require('express');

const {userLogin,
    userSingnup,
    userValidateController} =require('../controllers/authController');

const {protect} = require('../middleware/protect')

const userRouter = express.Router()

  userRouter.post('/login', async (req, res) => {
    const response = await userLogin(req)
    res.json(response).status(200)
    
    
  })
  
  userRouter.post('/register', async (req, res) => {
    const response = await userSingnup(req)
    res.json(response).status(200)
  })
  
  // User features routes
  userRouter.get('/validate', protect, async (req, res) => {
    const response = await userValidateController(req)
    res.json(response)
  })

module.exports = userRouter;