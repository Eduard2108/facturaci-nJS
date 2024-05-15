class Products {
    getProductByID(id) {
        let dataProduct = localStorage.getItem('products');

        let products = JSON.parse(dataProduct);

        if (!products) {
            alert('No hay productos registrados');
            return;
        }

        let product = products.find(product => product.id == id);

        if (product) {
            return product;
        } else {
            alert('No se encontró un producto con el ID proporcionado');
            return null;
        }
    }

    showProducts() {
        let dataProducts = localStorage.getItem('products');

        let products = JSON.parse(dataProducts);

        if (!products) {
            console.log('No hay productos registrados');
            return;
        }

        let productsList = document.getElementById('productsList');

        productsList.innerHTML = '';

        for (let product of products) {
            let prod = document.createElement('li');
            prod.textContent = `ID: ${product.id}, Producto: ${product.description}, Precio: ${product.price}, Stock: ${product.stock}`;
            productsList.appendChild(prod);
        }
    }
}

// Corrección de la instanciación de la clase Products
let myFunctionProducts = new Products();

// Event listener para mostrar todos los productos
document.getElementById('showProductsButton').addEventListener('click', function() {
    myFunctionProducts.showProducts();
});

// Event listener para buscar un producto por ID
document.getElementById('searchButton').addEventListener('click', function() {
    let id = document.getElementById('searchInput').value;

    let product = myFunctionProducts.getProductByID(id);

    if (product) {
        let productsList = document.getElementById('productsList');
        let prod = document.createElement('li');
        prod.textContent = `ID: ${product.id}, Producto: ${product.description}, Precio: ${product.price}, Stock: ${product.stock}`;
        productsList.appendChild(prod);
    }
});

