const user = require('./user');
const cab = require('./cab');
const place = require('./place');
const book = require('./book');
const driver = require('./driver');

cab.hasMany(book,{foreignKey:'cab_id'});
book.belongsTo(cab,{
    foreignKey:'cab_id'
});


user.hasMany(book,{foreignKey:'user_id'});
book.belongsTo(user, {
    foreignKey:'user_id'
});


user.sync({alter: true});
cab.sync({alter: true});
driver.sync({alter: true});
place.sync({alter: true});
book.sync({alter: true});
