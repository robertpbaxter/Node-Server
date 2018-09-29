require('dotenv').config()

const express = require('express');
const app = express();
const test = require('./controllers/testcontroller')
const authTest = require('./controllers/authtestcontroller')

const user = require('./controllers/usercontroller')
const sequelize = require('./db')
const bodyParser = require('body-parser')

sequelize.sync(); //tip: pass in {force:true} for resetting tables

app.use(bodyParser.json())
app.use(require('./middleware/headers'))

//EXPOSED ROUTES
app.use('/test',test)
app.use('/api/user',user)

//PROTECTED ROUTES 
app.use(require('./middleware/validate-session')) //(Anything beneath validate-session will require a token to access)
app.use('/authtest',authTest)

app.listen(3000,()=>console.log('Goliath online'))