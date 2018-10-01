const router=require('express').Router()
const User=require('../db').import('../models/user')
const Log=require('../db').import('../models/log')

//POST: Allows users to create a workoutlog with descriptions, definitions, results, and owner properties
router.post('/',(req,res)=>{

})

//GET: Get all logs for an individual user
router.get('/',(req,res)=>{

})

//GET: Gets individual logs by id for an individual user
router.get('/:id',(req,res)=>{

})

//PUT: Allows individual logs to be updated by a user
router.put('/:id',(req,res)=>{

})

//DELETE: Allows individual logs to be deleted by a user
router.delete('/:id',(req,res)=>{
    
})