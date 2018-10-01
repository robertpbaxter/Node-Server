const Sequelize=require('sequelize')

const sequelize=new Sequelize('workoutserverlog','postgres','Postgres?Chinchilla&58701',{host:'localhost',dialect:'postgres'})

sequelize.authenticate().then(
    ()=>console.log('Connected to workout log server'),
    ()=>console.log(err)
)

module.exports=sequelize