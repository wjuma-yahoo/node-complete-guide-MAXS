
const products = [
	{
		name: 'IPCW CWT-732B2 Honda Civic 4 puertas Bermudas negro lámpara trasera con ojos de cristal - 3 piezas',
		price: 93.00,
		image: 'https://m.media-amazon.com/images/I/51OoeQrDhZL._AC_SX425_.jpg',
		description: 'Las luces traseras Euro le dan a tu coche un aspecto muy personalizado'
	}
]


exports.getProducts = (req, res) => {
	res.render('index', {
		pageTitle: 'Product List',
		path: '/',
		products
	});
}

exports.getShop = (req, res) => {
	res.render('shop', {
		pageTitle: 'Shop',
		path: '/shop'
	});
}