const express = require('express');
const controller = require('../controller/adminController');

const router = express.Router();
router.get('/admin/home', controller.ahome);
router.get('/admin/user', controller.users);
router.get('/admin/cab', controller.index);
router.get('/admin/bookview', controller.bookindex);
router.post('/admin/bookview', controller.bookindexPost);
// router.get('/admin/user/update/:id', controller.update);
// router.post('/admin/user/update/:id', controller.updatePost);
// router.get('/admin/user/delete/:id', controller.delete);

module.exports = router;