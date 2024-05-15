import Valida from "../components/validations.js";

let products = JSON.parse(localStorage.getItem('products')) || [];
const validated = new Valida();

class Product {
    constructor() {
        this.idCounter = products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
    }

    createProduct(description, price, stock) {
        let product = {
            id: this.idCounter++,
            description: description,
            price: price,
            stock: stock,
        };
        return product;
    }
}

let myFunctionProducts = new Product();

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let description = document.getElementById('productDescription').value;
    let price = parseFloat(document.getElementById('productPrice').value);
    let stock = parseInt(document.getElementById('productStock').value);

    if (!validated.only_letters(description)) {
        alert('La descripción solo puede contener letras');
        description = description.replace(/[^A-Za-z\s]/g, '');
        return;
    }

    if (!validated.only_numbers(stock)) {
        alert('El stock solo puede contener números');
        stock = stock.replace(/[^0-9]/g, '');
        return;
    }

    let newProduct = myFunctionProducts.createProduct(description, price, stock);
     
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    alert('Producto creado con éxito');
    document.getElementById('productForm').reset(); // Limpiar el formulario
});




