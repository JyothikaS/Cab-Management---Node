const User = require('../model/user');

module.exports.home = async (req, res, next) => {

    const userFromDb = await User.findOne({
        where: { id: req.session.userId }
    });
    res.render('home', {
        data: userFromDb,
        layout: 'admin'
    });
  //  res.redirect('/login');
}
//dbt editef files - homecntrlr, homeroutes, profile-update in profile-update
//index
module.exports.index = async(req, res, next) => {
       
            const userFromDb = await User.findAll({
                where: { id: req.session.userId }
            });
            res.render('profile-index', {
                data: userFromDb
            });       
        }
//--index
module.exports.update = (req, res, next) => {
    User.findByPk(req.params.id)
        .then(user => {
            res.render('profile-update', {
                data: user
            })
        });
}
module.exports.updatePost = async (req, res, next) => {
    var user = await User.findByPk(req.params.id);
    await User.update(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            gender: req.body.gender,
            dob: req.body.dob,
            password: req.body.password
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/profile');
}


//LOGOUT
module.exports.logout = (req, res, next)=>{
    req.session.id = null;
    return res.redirect('/login');
}

