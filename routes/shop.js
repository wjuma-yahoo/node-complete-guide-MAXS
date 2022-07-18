const { Router } = require('express');
const path = require('path');
const router = Router();

router.get('/', (req, res) => {
	console.log("I'am another middleware!");
	res.send("Hello World!");
});

router.get('/shop', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'views', 'shop.html'));
})

module.exports = router;