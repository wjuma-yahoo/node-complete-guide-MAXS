const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/add-product', (req, res, next) => {
	res.send('<form method="POST" action="/product"><label>Producto</label><input name="producto" type="text"/><button>Agregar</button></form>');
});

app.post('/product', (req, res) => {
	console.log(req.body);
	res.redirect('/');
})

app.use((req, res, next) => {
	console.log("I'am another middleware!");
	res.send("Hello World!");
});

app.listen(
	3000,
	console.log("Server running on port 3000")
);