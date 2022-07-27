const Product = require('../model/product');

exports.getProducts = (req, res) => {

	Product.fetchAll( products =>  {
		res.render('shop/product-list', {
			pageTitle: 'Product List',
			path: '/',
			products
		});
	});
}

exports.getShop = (req, res) => {

	Product.fetchAll( products =>  {
		res.render('shop/index', {
			pageTitle: 'Shop',
			path: '/shop',
			products
		});
	});
}