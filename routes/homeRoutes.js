const express = require('express');
const controller = require('../controller/homeController');

const router = express.Router();

router.get('/home', controller.home);
router.get('/logout', controller.logout);
router.get('/profile', controller.index);
router.get('/profile/update/:id', controller.update);
router.post('/profile/update/:id', controller.updatePost);

module.exports = router;
