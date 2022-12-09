const express = require('express');
const controller = require('../controller/cabController');



const router = express.Router();

router.get('/cab', controller.index);
router.get('/cab/view', controller.view);
router.get('/cab/details/:cid', controller.details);
router.get('/cab/create', controller.create);



router.post('/cab/create', controller.createPost);
router.get('/cab/update/:id', controller.update);
router.post('/cab/update/:id', controller.updatePost);
router.get('/cab/delete/:id', controller.delete);
module.exports = router;
