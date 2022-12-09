const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("cabmvc", "root", "Jyothi12!", {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;