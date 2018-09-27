require('dotenv').config()

const express = require('express');
const app = express();
const test = require('./controllers/testcontroller') 
const user = require('./controllers/usercontroller')
const sequelize = require('./db')
const bodyParser = require('body-parser')

sequelize.sync(); //tip: pass in {force:true} for resetting tables

app.use(bodyParser.json())
app.use(require('./middleware/headers'))
app.use('/test',test)
app.use('/api/user',user)
app.listen(3000,()=>console.log('Goliath online'))