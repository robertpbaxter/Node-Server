const express = require('express')
const router = express.Router()
const sequelize = require('../db') 
const TestModel = sequelize.import('../models/test')

//Controller method 1: Simple response
router.post('/one',(req,res)=>{
    res.send('Test 1 went through!')
})

//Controller method 2: Persisting data
router.post('/two',(req,res)=>{
    let testData = 'Test data for enpoint two'
    
    TestModel
    .create({
        testdata:testData
    }).then(dataFromDatabase =>{
        res.send('Test two went through!')
    })
})

//Controller method 3: req.body
router.post('/three',(req,res)=>{
    var testData = req.body.testdata.item
    
    TestModel
    .create({
            testdata: testData
        })
        res.send('Who cares about what you just posted!')
        console.log('Test three went through!')
})

//Step 4 - Use this with postman
router.post('/four',(req,res)=>{
    let testData = req.body.testdata.item
    TestModel
    .create({testdata:testData})
    .then(function message(){
            res.send('Test 4 went through!')
        })
    })

    //Route 5: Return data in a promise
    router.post('/five',(req,res)=>{
    let testData = req.body.testdata.item 
    TestModel
    .create({testdata:testData})
    .then(function message(data) {res.send(data)})
})

//Route 6: Return response as JSON
router.post('/six',(req,res)=>{
    let testData = req.body.testdata.item
    TestModel
    .create({testdata:testData})
    .then(function message(testdata){res.json({incoming:testdata})})
})

//Route 7: Handle errors
router.post('/seven',(req,res)=>{
    let testData = req.body.testdata.item
    TestModel
    .create({testdata:testData})
        .then(
            function createSuccess(testdata){res.json({input:testdata})},
            function createError(err){res.send(500,err.message)}
            )
        })

//GET: Get simple message from server
router.get('/helloclient',(req,res)=>{
    res.send('This is a message from the server to the client: Hello meatbag.')
})

module.exports=router