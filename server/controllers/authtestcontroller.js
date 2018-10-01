const router=require('express').Router()
const User=require('../db').import('../models/user')
const AuthTestModel=require('../db').import('../models/authtest')

//POST SINGLE ITEM FOR INDIVIDUAL USER
router.post('/create',(req,res)=>{
    let owner=req.user.id
    let authTestData=req.body.authtestdata.item

    AuthTestModel
        .create({authtestdata:authTestData,owner:owner})
        .then(
            createSuccess=authtestdata=>res.json({authtestdata:authtestdata}),
            createError=err=>res.send(500,err.message)
        )
})

//GET ALL ITEMS FOR INDIVIDUAL USER
router.get('/getall', (req,res)=>{
    let userid=req.user.id

    AuthTestModel
        .findAll({where:{owner:userid}})
        .then(
            findAllSuccess=data=>res.json(data),
            findAllError=err=>res.send(500,err.message)
        )
})

//GET SINGLE ITEM FOR INDIVIDUAL USER
router.get('/:id',(req,res)=>{
    let data=req.params.id
    let userid=req.user.id

    AuthTestModel
        .findOne({where:{id:data,owner:userid}})
        .then(
            findOneSuccess=data=>res.json(data),
            findOneError=err=>res.send(500,err.message)
        )
})

//DELETE ITEM FOR INDIVIDUAL USER
router.delete('/delete/:id',(req,res)=>{
    let data=req.params.id
    let userid=req.user.id
    
    AuthTestModel 
        .destroy({where:{id:data,owner:userid}})//Sequelize method to removeitem from db
        .then(
            deleteLogSuccess=data=>res.send('You removed a log'),
            deleteLogError=err=>res.send(500,err.message)
        )
})

//UPDATE ITEM FOR INDIVIDUAL USER
router.put('/update/:id',(req,res)=>{
    let data=req.params.id
    let authtestdata=req.body.authtestdata.item

    AuthTestModel
        .update({authtestdata:authtestdata},{where:{id:data}})//Sequelize method which takes two arguments (new value + where to place value)
        .then(
            updateSuccess=updatedLog=>res.json({authtestdata:authtestdata}),
            updateError=err=>res.send(500,err.message)
        )
})

module.exports=router