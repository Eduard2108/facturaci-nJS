class Products {
    getProductByID(id) {
        let data = localStorage.getItem('products');
        let products = JSON.parse(data);

        if (!products) {
            alert('No hay productos registrados.');
            return null;
        }

        let product = products.find(product => product.id == id); // Usar == para comparar tipos diferentes

        if (product) {
            return product;
        } else {
            alert('No se encontró un producto con el ID proporcionado');
            return null;
        }
    }

    updateProduct(id, description, price, stock) {
        let data = localStorage.getItem('products');
        let products = JSON.parse(data);

        let product = products.find(product => product.id == id); // Usar == para comparar tipos diferentes

        if (product) {
            product.description = description;
            product.price = price;
            product.stock = stock;

            localStorage.setItem('products', JSON.stringify(products));

            alert('Los datos del producto han sido actualizados.');
        } else {
            alert('No se encontró un producto con el ID proporcionado');
        }
    }
}

document.getElementById('modifyProductForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let id = document.getElementById('productID').value;
    let myProducts = new Products();
    let product = myProducts.getProductByID(id);

    if (product) {
        document.getElementById('productName').value = product.description;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productStock').value = product.stock;

        document.getElementById('editProductButton').disabled = false;
        document.getElementById('saveProductButton').dataset.id = id;

        document.getElementById('productDetails').style.display = 'block'; // Mostrar los detalles del producto
    }
});

document.getElementById('editProductButton').addEventListener('click', function() {
    document.getElementById('productName').disabled = false;
    document.getElementById('productPrice').disabled = false;
    document.getElementById('productStock').disabled = false;

    document.getElementById('saveProductButton').disabled = false;
});

document.getElementById('saveProductButton').addEventListener('click', function() {
    let description = document.getElementById('productName').value;
    let price = document.getElementById('productPrice').value;
    let stock = document.getElementById('productStock').value;
    let id = this.dataset.id;

    let myProducts = new Products();
    myProducts.updateProduct(id, description, price, stock);
});
