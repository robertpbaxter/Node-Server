require('dotenv').config()

const Sequelize = require('sequelize')
//instantiate a new version of Sequelize
const sequelize = new Sequelize(process.env.NAME,'postgres',process.env.PASS,{     //(name of db, type/dialect of db, and password)
    host:'localhost',
    dialect:'postgres'
})

sequelize.authenticate().then(()=>console.log('Connected to pieApi postgres database'))
    .catch(err=>console.log(err))

module.exports = sequelize 