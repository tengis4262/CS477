let products = [
    { id: 1, title: 'Node.js', price: 99.99, description: 'Great' },
    { id: 2, title: 'React.js', price: 199.99, description: 'Great 2' },
    { id: 3, title: 'Angular.js', price: 299.99, description: 'Great 3' }
];

module.exports = class Product {

    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    static getAll() {
        return products;
    }

    static getById(id){
        return products.find(prod=>prod.id ==id);
    }

}