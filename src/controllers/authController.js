const db =require('../models/user.data');
const jwt =require('jsonwebtoken');


const {JWT_SECRET_KEY} = require('../configs/constants');
const { Users } = db

exports.userSingnup = async (req,res,next) =>{
    const errors = []
    
    try {
        const {name ,email,phone ,password } = req.body;

        const checkEmailExists = await Users.findOne({ email })
        if (checkEmailExists)  throw new Error('Email already in use');
        
        const checkPhoneExists = await Users.findOne({phone})
        if (checkPhoneExists)  throw new Error('phone already in use');
        
        const hashedPassword = await bcrypt.hash(password , 10);
        const user= await Users.create({ name ,email, phone ,hashedPassword ,created_on: new Date()});
        
        
    }catch (error) {
        if (typeof error === typeof new Error('')) {
          errors.push(error.message)
        } else {
          errors.push(String(error))
        }
      }
      return {
        success: errors.length < 1,
        errors
      }

    }
exports.userLogin = async(req,res,next) =>{
  const errors = []
  const data = {}

  try{
    const { email, password } = req.body
    const user = await Users.findOne({email})
    if (!user) throw new Error('user  not found');

    const isMatched = await bcrypt.compare(password, user.password);
    if (isMatched){
      const token = jwt.sign({userid:user._id , email:user.email, role:'user'}, 
      JWT_SECRET_KEY ,
      {expiresIn:'3d'});
      
      if (!token) throw new Error('Unable to login the user')
      
      data.token = token ;
     }else{
      throw new Error('Email and Password do not match');
     }
  }catch(error){
    if (typeof error ===typeof new Error('')){
      errors.push(error.message)
    }else{
      errors.push(String(error))
    }
    }
    return {
      success:errors.length <1,
      errors,
      data
    }
  }

  exports.userValidateController = async (req ,res, next) => {
    const errors = []
    const data= {}
  
    try {
      const user = await db.Users.findById(req.user)
  
      if (!user) {
        throw new Error('User does not exist')
      }
  
      data.user = user
    } catch (error) {
      if (typeof error === typeof new Error('')) {
        errors.push(error.message)
      } else {
        errors.push(String(error))
      }
    }
  
    return {
      success: errors.length < 1,
      errors,
      data
    }
  }


