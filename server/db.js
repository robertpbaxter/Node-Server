const Sequelize = require('sequelize')

const sequelize = new Sequelize('workoutlog','postgres',process.env.PW_SECRET,{
    host:'localhost',
    dialect:'postgres'
})

sequelize.authenticate().then(
    function(){
        console.log('Connected to workoutlog postgres database **System online**')
    },
    function(err){
        console.log(err)
    }
)

module.exports = sequelize