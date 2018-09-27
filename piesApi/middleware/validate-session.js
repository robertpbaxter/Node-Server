const jwt=require('jsonwebtoken')
const User=require('../db').import('../models/user')

const validateSession=(req,res,next)=>{
    const token=req.headers.authorization
    jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
        if (!err && decodedToken){ //Both conditions because there are gray areas that are neither an error nor a success (e.g. timeouts)
            User.findOne({where:{id:decodedToken.id}})
            .then(user=>{
                if(!user) throw 'err'
                req.user=user
                return next()
            }).catch(err=>next(err))
        }else{
            req.errors=err //error handling
            return next()
        }

    })
}

module.exports = validateSession