class DeleteProducts {

    deleteProductByID(id) {
        // Obtiene los datos del almacenamiento local
        let dataProduct = localStorage.getItem('products');
    
        // Convierte los datos a un objeto JavaScript
        let products = JSON.parse(dataProduct);
    
        // Verifica si hay clientes
        if (!products) {
            console.log('No hay clientes registrados.');
            return;
        }
        // Encuentra el índice del cliente con el DNI proporcionado
        let index = products.findIndex(products => products.id === id);

        // Si el cliente existe, elimínalo
        if (index !== -1) {
            products.splice(index, 1);

            // Actualiza los datos en el almacenamiento local
            localStorage.setItem('products', JSON.stringify(products));

            alert('Producto eliminado con éxito');

        } else {

            alert('No se encontró un producto con el ID proporcionado');
        }
    }
}

document.getElementById('deleteProductForm').addEventListener('submit', function(event) {
    // Previene la recarga de la página
    event.preventDefault();

    // Obtiene el DNI del formulario
    let id = document.getElementById('id').value;

    // Crea una instancia de la clase functions
    let myFunctionsDelete = new DeleteProducts();

    // Llama a la función deleteClientByDni con el DNI
    myFunctionsDelete.deleteProductByID(id);
});