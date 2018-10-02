const Sequelize=require('sequelize')

const sequelize=new Sequelize('workoutserverlog','postgres',process.env.PW_SECRET,{host:'localhost',dialect:'postgres'})

sequelize.authenticate().then(
    ()=>console.log('Connected to workout log server'),
    ()=>console.log(err)
)

module.exports=sequelize