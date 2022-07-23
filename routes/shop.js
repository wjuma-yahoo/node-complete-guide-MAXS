const { Router } = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = Router();

const controllers = require('../controllers/shop');

router.get('/', controllers.getProducts);

router.get('/shop', controllers.getShop);

module.exports = router;