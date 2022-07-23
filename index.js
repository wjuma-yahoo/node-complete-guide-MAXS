require('dotenv').config();
const express = require('express');
const path = require('path');
const errorHandler = require('errorhandler');
const morgan = require('morgan');
const app = express();

const rootDir = require('./util/path');
const port = process.env.PORT || 4000;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

if (process.env.NODE_ENV === 'development') {
	app.use(errorHandler());
	app.use(morgan('tiny'));
}

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use('/public', express.static(path.join(rootDir, 'public')))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
	res.status(404).render('page404');
});

app.listen(
	port,
	console.log(`Server running on port ${port}`)
);