const { Router } = require('express');
const path = require('path');
const router = Router();


router.get('/add-product', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/product', (req, res) => {
	console.log(req.body);
	res.redirect('/');
})


module.exports = router;