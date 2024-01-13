const db = require('../models/user.data');
const jwt = require('jsonwebtoken');

const {JWT_SECRET_KEY} = require('../configs/constants');


const protect = async(req,res,next) =>{
    try{
    const {authorization} = req.header
    if (!authorization){
        res.json({
            success:false,
            errors:{message: 'user not logged in '},
            data : {}
        }).status(404)
        return
    }
    const token = authorization.split(' ')[1]
    const data = jwt.verify(token, JWT_SECRET_KEY)
    if (data.role === 'user') {
        const user = await db.Users.findById(data?.userid)
        if (!user) {
          res.json({ success: false, message: 'User does not exist ' }).status(404)
        }
        req.user = data.userid
      }

      next()
    }catch(error){
        console.log(error);
    }

}

module.exports =protect