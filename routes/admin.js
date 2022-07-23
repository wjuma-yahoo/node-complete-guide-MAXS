const { Router } = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = Router();
const controllers = require('../controllers/product');

router.get('/add-product', controllers.getAddProduct);

router.post('/product', controllers.postAddProduct);

module.exports = router;