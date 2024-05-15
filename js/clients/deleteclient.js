class functions {

    deleteClientByDni(dni) {
        // Obtiene los datos del almacenamiento local
        let data = localStorage.getItem('clients');
    
        // Convierte los datos a un objeto JavaScript
        let clients = JSON.parse(data);
    
        // Verifica si hay clientes
        if (!clients) {
            console.log('No hay clientes registrados.');
            return;
        }
        // Encuentra el índice del cliente con el DNI proporcionado
        let index = clients.findIndex(client => client.dni === dni);

        // Si el cliente existe, elimínalo
        if (index !== -1) {
            clients.splice(index, 1);

            // Actualiza los datos en el almacenamiento local
            localStorage.setItem('clients', JSON.stringify(clients));
            alert('Cliente eliminado con éxito');
        } else {
            alert('No se encontró un cliente con el DNI proporcionado');
        }
    }
}

document.getElementById('deleteClientForm').addEventListener('submit', function(event) {
    // Previene la recarga de la página
    event.preventDefault();

    // Obtiene el DNI del formulario
    let dni = document.getElementById('dni').value;

    // Crea una instancia de la clase functions
    let myFunctions = new functions();

    // Llama a la función deleteClientByDni con el DNI
    myFunctions.deleteClientByDni(dni);
});