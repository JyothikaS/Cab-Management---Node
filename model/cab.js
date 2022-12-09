const sequelize = require('./db');
const {DataTypes, INTEGER} = require('sequelize');

const Cab = sequelize.define('cab',{
    cid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cname: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    dname: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    dcontact: {
        type:DataTypes.BIGINT,
        allowNull: false    
    },
    demail: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    dlicense: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    license_plate: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    cmodel: {
        type: DataTypes.STRING(150),
        allowNull:false,
    },
    myear: {
        type: DataTypes.DATEONLY,
        allowNull:false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull:false,
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull:false,
    },
});
module.exports = Cab;