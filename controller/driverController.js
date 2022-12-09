const driver = require('../model/driver');

module.exports.index = (req, res, next) => {
    driver.findAll().then(drivers => {
        res.render('driver-index', {
            data: drivers
        });
    })
}
module.exports.create = (req, res, next) => {
    res.render('driver-create');
}
module.exports.createPost = (req, res, next) => {
    driver.create({
        dname: req.body.dname,
        dcontact: req.body.dcontact,
        demail: req.body.demail,
        license_no: req.body.license_no,
        exp_date: req.body.exp_date,
        dstatus: req.body.dstatus
        })
        .then(user => {
            res.redirect("/driver");
        })
}

module.exports.update = (req, res, next) => {
    driver.findByPk(req.params.id)
        .then(user => {
            res.render('driver-update', {
                data: user
            })
        });
}


module.exports.updatePost = async (req, res, next) => {
    var user = await driver.findByPk(req.params.cid);
    await driver.update(
        {
            dname: req.body.dname,
            dcontact: req.body.dcontact,
            demail: req.body.demail,
            license_no: req.body.license_no,
            exp_date: req.body.exp_date,
            dstatus: req.body.dstatus
        },
        {
            where: {cid: req.params.id}
        }
    )
    res.redirect('/driver');
}
module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let user = await driver.findByPk(id);
    if (user) {
        await driver.destroy({
            where: {
                cid: id
            }
        });
        res.redirect("/driver");
    }
}
