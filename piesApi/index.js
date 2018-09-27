require('dotenv').config() //.env refers to an environmental file; require is an import function;.config() is configuring the data

const express = require('express')
const app = express()//() means calling express immediately
const pie = require('./controllers/piecontroller')
const user = require('./controllers/usercontroller')
const sequelize = require('./db')
const bodyParser = require('body-parser')

sequelize.sync()
//sequelize.sync({force:true}) //builds a new table

app.use(bodyParser.json())
app.use(require('./middleware/headers'))

app.use(express.static(__dirname+'/public')) //__dirname is the current directory name of this file

app.get('/', (req,res)=>res.render('index'))

app.use('/pies',pie)
app.use('/auth',user)

app.listen(process.env.PORT,()=>console.log(`App is listening on ${process.env.PORT}`))
