exports.getAddProduct = (req, res) => {
	res.render('add-product', {
		pageTitle: 'Add product',
		path: '/add-product'
	});
}

exports.postAddProduct = (req, res) => {
	res.redirect('/');
}
