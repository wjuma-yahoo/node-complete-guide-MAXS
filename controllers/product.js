const Product = require('../model/product');

exports.getAddProduct = (req, res) => {
	res.render('add-product', {
		pageTitle: 'Add product',
		path: '/add-product'
	});
}

exports.postAddProduct = (req, res) => {
	const { title } = req.body;
	const product = new Product(title);
	product.save();
	// console.log(req.body);
	res.redirect('/');
}
