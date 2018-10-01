const router=require('express').Router()
const User=require('../db').import('../models/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

//Create user endpoint
router.post('/user',(req,res)=>{
    let username=req.body.user.username
    let pass=req.body.user.password

    User.create({
        username:username,
        passwordhash:bcrypt.hashSync()
    }).then(
        createSuccess=user=>{
            let token=jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:60*60^24})

            res.json({
                user:user,
                message:'created',
                sessionToken:token
            })
        },
        createError=err=>res.send(500,err.message)
    )
})

//Login endpoint
router.post('/login',(req,res)=>{
    User.findOne({where:{username:req.body.user.username}}).then(
        user=>{
            if(user){
                bcrypt.compare(req.body.user.password,user.passwordhash,(err,matches)=>{
                    if(matches){
                        let token=jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:60*60*24})
                        res.json({
                            user:user,
                            message:'successfully authenticated',
                            sessionToken:token
                        })
                    }else{
                        res.status(502).send({error:'unable to authenticate'})
                    }
                })
            }else{
                res.status(500).send({error:'unable to authenticate'})
            }
        },
        err=>res.status(501).send({error:'unable to authenticate'})
    )
})

module.exports=router