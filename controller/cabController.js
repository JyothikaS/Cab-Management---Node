const cab = require('../model/cab');
// import swal from 'sweetalert';

module.exports.index = (req, res, next) => {
    cab.findAll().then(cabs => {
        res.render('cab-index', {
            data: cabs
        });
    })
}

//cab view in user side
module.exports.view = (req, res, next) => {
    cab.findAll().then(cabs => {
        res.render('cab-view', {
            data: cabs
        });
    })
}


//--
//cab details
module.exports.details = (req, res, next) => {
    cab.findByPk(req.params.cid)
    .then(cabs => {
        res.render('cab-details', {
            
            data: cabs
        });
     
    })
}

//
module.exports.create = (req, res, next) => {
    res.render('cab-create', {
        layout: 'admin'
    });
}
module.exports.createPost = (req, res, next) => {
    cab.create({
        cname: req.body.cname,
        license_plate: req.body.license_plate,
        cmodel: req.body.cmodel,
        myear: req.body.myear,
        capacity: req.body.capacity,
        status: req.body.status,
        dname: req.body.dname,
        dcontact: req.body.dcontact,
        demail: req.body.demail,
        dlicense: req.body.dlicense,
        password: req.body.password
        })
        .then(user => {
            res.redirect("/cab");
        })
}

module.exports.update = (req, res, next) => {
    cab.findByPk(req.params.id)
        .then(user => {
            res.render('cab-update', {
                data: user
            })   
        });
}

module.exports.updatePost = async (req, res, next) => {
    var user = await cab.findByPk(req.params.cid);
    await cab.update(
        {
            cname: req.body.cname,
            license_plate: req.body.license_plate,
            cmodel: req.body.cmodel,
            myear: req.body.myear,
            capacity: req.body.capacity,
            status: req.body.status,
            dname: req.body.dname,
            dcontact: req.body.dcontact,
            demail: req.body.demail,
            dlicense: req.body.dlicense,
            password: req.body.password
        },
        {
            where: {cid: req.params.id}
        }
    )
    res.redirect('/cab');
}
module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let user = await cab.findByPk(id);
    if (user) {
        await cab.destroy({
            where: {
                cid: id
            }
        });
        res.redirect("/cab");
    }
}
  