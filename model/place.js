const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Place = sequelize.define('place',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    source: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    destination: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    rate: {
        type:DataTypes.INTEGER,
        allowNull: false    
    },
    pstatus: {
        type: DataTypes.STRING(20),
        allowNull:false,
    },
});
module.exports = Place;