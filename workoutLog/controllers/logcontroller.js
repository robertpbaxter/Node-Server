const router=require('express').Router()
const User=require('../db').import('../models/user')
const LogModel=require('../db').import('../models/log')

//POST: Allows users to create a workoutlog with descriptions, definitions, results, and owner properties
router.post('/',(req,res)=>{
    let owner=req.user.id
    let logData=req.body.logdata.item

    LogModel
        .create({logdata:logData,owner:owner})
        .then(
            createSuccess=logdata=>res.json({logdata:logdata}),
            createError=err=>res.send(500,err.message)
        )
})

//GET: Get all logs for an individual user
router.get('/',(req,res)=>{
    let userid=req.user.id

    LogModel
        .findAll({where:{owner:userid}})
        .then(
            findAllSuccess=data=>res.json(data),
            findAllError=err=>res.send(500,err.message)
        )
})

//GET: Gets individual logs by id for an individual user
router.get('/:id',(req,res)=>{
    let data=req.params.id
    let userid=req.user.id

    LogModel
        .findOne({where:{id:data,owner:userid}})
        .then(
            findOneSuccess=data=>res.json(data),
            findOneError=err=>res.send(500,err.message)
        )
})

//PUT: Allows individual logs to be updated by a user
router.put('/:id',(req,res)=>{
    let data=req.params.id
    let logdata=req.body.logdata.item

    LogModel
        .update({logdata:logdata},{where:{id:data}})
        .then(
            updateSucces=updatedLog=>res.json({logdata:logdata}),
            updateError=err=>res.send(500,err.message)
        )
})

//DELETE: Allows individual logs to be deleted by a user
router.delete('/:id',(req,res)=>{
    let data=req.params.id
    let userid=req.user.id

    LogModel
        .destroy({where:{id:data,owner:userid}})
        .then(
            deleteLogSuccess=data=>res.send('Log removed'),
            deleteLogError=err=>res.send(500,err.message)
        )
})