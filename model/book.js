const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Book = sequelize.define('book',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    cab_id: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    pickup: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    dropoff: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    date: {
        type:DataTypes.DATEONLY,
        allowNull: false    
    },
    time: {
        type: DataTypes.TIME,
        allowNull:false,
    },
    psngrname: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    psngrcontact: {
        type: DataTypes.STRING(40),
        allowNull: false    
    },
    
    psngrno: {
        type: DataTypes.INTEGER,
        allowNull: false    
    },
    rate:{
        type: DataTypes.INTEGER,
        allowNull: false   
    },
    cabnumber:{
        type: DataTypes.STRING(10),
        allowNull: false 
    }
});
module.exports = Book;