const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Driver = sequelize.define('driver',{
    did: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dname: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    dcontact: {
        type: DataTypes.INTEGER,
        allowNull: false    
    },
    demail: {
        type: DataTypes.STRING(40),
        allowNull: false 
    },
    license_no: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    exp_date: {
        type: DataTypes.DATEONLY,
        allowNull:true,
    },
    dstatus: {
        type: DataTypes.STRING(20),
        allowNull:false,
    }
});
module.exports = Driver;