const sequelize = require('./db');
const {DataTypes} = require('sequelize');
//const Review = require('./review');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    address: {
        type: DataTypes.STRING(150),
        allowNull:true,
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull:true,
    },
    gender: {
        type: DataTypes.STRING(150),
        allowNull:true,
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = User;