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
    })
})