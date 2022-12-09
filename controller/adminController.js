const User = require('../model/user');
const Cab = require('../model/cab');
const Book = require('../model/book');
module.exports.ahome = async (req, res, next) => {
    const userFromDb = await User.findOne({
        where: { id: req.session.userId }
    });
    res.render('admin-home',{
        data: userFromDb,
        layout: 'admin'
    });
    
}
module.exports.users = (req, res, next) => {
    User.findAll().then(user => {
        res.render('user-index', {
            data: user,
            layout: 'admin'
        });
    })
}
//cab & driver details

module.exports.index = (req, res, next) => {
    Cab.findAll().then(cabs => {
        res.render('cab-index', {
            layout: 'admin',
            data: cabs
        });
    })
}
//book disp

module.exports.bookindex = (req, res, next) => {
    Book.findAll().then(bookings => {
        res.render('book-index', {
            data: bookings,
            layout: 'admin'
        });
    })
}

//book 
module.exports.bookindexPost = async (req, res, next) => {
    date=req.body.date
    let bookings = await Book.findAll({
        where:{
            date:date
        }
    })
    if(bookings.length!=0){
        res.render('book-index',{
            data:bookings
        })
    }
    else {
        let isFound = 1
        Book.findAll().then(bookings => {
            res.render('book-index', {
                data: bookings,
                found: isFound
            })
        })
    }
}