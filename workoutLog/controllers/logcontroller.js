const router=require('express').Router()
const Log=require('../db').import('../models/log')
const validateSession=require('../middleware/validate-session')

//POST: Allows users to create a workoutlog with descriptions, definitions, results, and owner properties
router.post('/',validateSession,(req,res)=>{
    if(!req.errors){
        // let ownr=req.user.id
        const logFromRequest={
            description:req.body.description,
            definition:req.body.definition,
            result:req.body.result,
            owner:req.user.id
        }
        
        Log.create(logFromRequest)
        .then(
            createSuccess=log=>res.json({log:log}),
            createError=err=>res.send(500,err.message)
        )
    }else{res.status(500).json(req.errors)}
})

//GET: Get all logs for an individual user
router.get('/',validateSession,(req,res)=>{
    Log.findAll({where:{owner:req.user.id}})
    .then(
        findAllSuccess=data=>res.json(data),
        findAllError=err=>res.send(500,err.message)
        )
})

//GET: Gets individual logs by id for an individual user
router.get('/:id',validateSession,(req,res)=>{
    let data=req.params.id
    let userid=req.user.id

    Log
        .findOne({where:{id:data,owner:userid}})
        .then(
            findOneSuccess=data=>res.json(data),
            findOneError=err=>res.send(500,err.message)
        )
})

//PUT: Allows individual logs to be updated by a user
router.put('/:id',validateSession,(req,res)=>{
    // res.send(req.body)
    if(!req.errors){
        Log.update(req.body,{where:{id:req.params.id}})
        .then(log=>res.status(200).json(log))
        .catch(err=>res.json(req.errors))
    }else{res.status(500),json(req.errors)}
})

//DELETE: Allows individual logs to be deleted by a user
router.delete('/:id',validateSession,(req,res)=>{
    if(!req.errors){
        Log.destroy({where:{id:req.params.id}})
        .then(log=>res.status(200).json(log))
        .catch(err=>res.status(500).json(req.errors))  
    }else(res.status(500).json(req.errors))
})

module.exports=router