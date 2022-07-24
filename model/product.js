const { readFile, writeFile } = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'product.json'
);

const getProductsFromFile = cb => {
    readFile(p, 'utf8', (err, fileContent) => {
        if ( err ) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product {

    constructor( t ) {
        this.title = t;
    }

    save() {

        getProductsFromFile( products => {

            products.push(this);
            writeFile(p, JSON.stringify(products, null, 2), err => {
                if ( err ) {
                    console.log(err)
                }
            });
        });
    }

    static fetchAll(cb) {

        getProductsFromFile( cb );
    }
}