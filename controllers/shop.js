const Product = require('../model/product');

exports.getProducts = (req, res) => {

	Product.fetchAll( products =>  {
		res.render('index', {
			pageTitle: 'Product List',
			path: '/',
			products
		});
	});
}

exports.getShop = (req, res) => {

	res.render('shop', {
		pageTitle: 'Shop',
		path: '/shop'
	});
}