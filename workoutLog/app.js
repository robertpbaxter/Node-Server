require('dotenv').config()

const express=require('express')
const app=express()
const log=require('./controllers/logcontroller')
const user=require('./controllers/usercontroller')
const sequelize=require('./db')
const bodyParser=require('body-parser')

sequelize.sync() //pass in {force:true} for resetting tables

app.use(bodyParser.json())
app.use(require('./middleware/headers'))

//Exposed routes (create user here)
app.use('/api',user)

//Protected routes(require login)
app.use(require('./middleware/validate-session'))
app.use('/api/log',log)

app.listen(3000,()=>console.log('Server online'))