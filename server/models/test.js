module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('test',{
        testdata: DataTypes.STRING
    })
}