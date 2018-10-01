module.exports=(sequelize,DataTypes)=>{
    const Log=sequelize.define('log',{
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        definition:{
            type:DataTypes.STRING,
            allowNull:false
        },
        result:{
            type:DataTypes.STRING,
            allowNull:false
        },
        owner:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })
    return Log
}


// This code doesn't work because I'm not working with only a single input
// return sequelize.define('logdata',{
//     description:DataTypes.STRING,
//     definition:DataTypes.STRING,
//     result:DataTypes.STRING,
//     owner:DataTypes.INTEGER
// })