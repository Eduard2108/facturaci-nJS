class functions {

    getClientByDni(dni) {
        // Obtiene los datos del almacenamiento local
        let data = localStorage.getItem('clients');
    
        // Convierte los datos a un objeto JavaScript
        let clients = JSON.parse(data);
    
        // Verifica si hay clientes
        if (!clients) {
            alert('No hay clientes registrados.');
            return null;
        }
        // Encuentra el cliente con el DNI proporcionado
        let client = clients.find(client => client.dni === dni);

        // Si el cliente existe, retorna sus datos
        if (client) {
            return client;
        } else {
            alert('No se encontró un cliente con el DNI proporcionado');
            return null;
        }
    }
    updateClient(dni, name, surname, hasCard) {
        // Lee los datos del almacenamiento local
        let data = localStorage.getItem('clients');

        // Convierte los datos a un objeto JavaScript
        let clients = JSON.parse(data);

        // Encuentra el cliente con el DNI proporcionado
        let client = clients.find(client => client.dni === dni);

        // Si el cliente existe, actualiza sus datos
        if (client) {
            client.name = name;
            client.surname = surname;
            client.hasCard = hasCard;
            // etc.

            // Guarda la lista de clientes actualizada en el almacenamiento local
            localStorage.setItem('clients', JSON.stringify(clients));

            alert('Los datos del cliente han sido actualizados.');
        } else {
            alert('No se encontró un cliente con el DNI proporcionado');
        }
    }
}

document.getElementById('modifyClientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let dni = document.getElementById('dni').value;
    let myFunctions = new functions();
    let client = myFunctions.getClientByDni(dni);

    if (client) {
        // Llena los campos con la información del cliente
        document.getElementById('name').value = client.name;
        document.getElementById('surname').value = client.surname;
        document.getElementById('hasCard').checked = client.hasCard;
        // etc.

        // Habilita el botón de edición
        document.getElementById('editButton').disabled = false;
        document.getElementById('saveButton').dataset.dni = dni;

        document.getElementById('clientInfo').style.display = 'block'; // Mostrar los detalles del producto
    }
});

document.getElementById('editButton').addEventListener('click', function() {
    // Habilita los campos de entrada para que el usuario pueda modificarlos
    document.getElementById('name').disabled = false;
    document.getElementById('surname').disabled = false;
    document.getElementById('hasCard').disabled = false;
    // etc.

    // Habilita el botón de guardar
    document.getElementById('saveButton').disabled = false;
});

document.getElementById('saveButton').addEventListener('click', function() {
    // Recoge la nueva información del cliente
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let hasCard = document.getElementById('hasCard').checked;
    // etc.

    // Recoge el DNI del cliente del atributo de datos personalizado en el botón "Guardar"
    let dni = this.dataset.dni;

    // Aquí deberías guardar la nueva información del cliente
    // Por ejemplo, podrías hacer algo como esto:
    let myFunctions = new functions();
    myFunctions.updateClient(dni, name, surname, hasCard);
});