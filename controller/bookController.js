const { where } = require('sequelize');

const book = require('../model/book');
const place = require('../model/place');
const cab = require('../model/cab');
const User = require('../model/user');


//passenger details

module.exports.create = async (req, res, next) => {
    const id = req.params.id;
    const places = await place.findAll();
    const cabFromDb = await cab.findByPk(id);
    const userFromDb = await User.findByPk(req.session.userId);
    console.log(userFromDb);
    res.render('booking-create', {
        id: id,
        cab: cabFromDb,
        data: places,
        user: userFromDb
    });
}
module.exports.createPost = (req, res, next) => {
    cab.findByPk(req.params.license_plate).then((data) => {

        console.log(req.body.start)
        console.log(req.body.end)
        place.findOne(
            {
                where: {
                    source: req.body.start,
                    destination: req.body.end
                }
            }
        ).then((paymentDetails) => {
            console.log(paymentDetails)
            book.create({
                id: req.body.id,
                date: req.body.date,
                time: req.body.time,
                pickup: req.body.start,
                dropoff: req.body.end,
                user_id: req.session.userId,
                cab_id: req.params.id,
                cabnumber: req.body.cabnumber,
                psngrname: req.body.psngrname,
                psngrcontact: req.body.psngrcontact,
                psngrno: req.body.psngrno,
                rate: paymentDetails.rate
            })
                .then(booking => {
                    console.log();
                    // res.redirect("/cab/bookview/"+booking.id);
                    res.redirect("/book/view/" + booking.id);
                })
        })
    })

}


//places
// module.exports.create = (req, res, next) => {
//     place.findAll().then(places => {
//         res.render('booking-create', {
//             data: places

//         });

//     })
// }

//bookview
module.exports.bookview = (req, res, next) => {
    book.findByPk(req.params.id).then(book => {
        res.render('book-view', {
            data: book
        });
    })
}

//payment

//payment
module.exports.payment = async(req, res, next) => {
let bookid = await book.findOne({where: {id: req.params.id}})
    res.render('payment-create',
    {data: bookid});
}
module.exports.success = async (req, res, next) => {
    let bookid = await book.findOne({where: {id: req.params.id}})
    res.render('payment-success',
    {data: bookid});
}
  
//invoice

module.exports.paymentInvoice = async (req, res, next) => {
    book.findOne({ where: { id: req.params.id } })
        .then(result => {
            
            res.render('invoice', {
                invoice: result,
               
            })
        })
}