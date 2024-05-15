class functions{
    getClientByDni(dni) {
        // Obtiene los datos del almacenamiento local
        let data = localStorage.getItem('clients');
    
        // Convierte los datos a un objeto JavaScript
        let clients = JSON.parse(data);
    
        // Verifica si hay clientes
        if (!clients) {
            alert('No hay clientes registrados.');
            return;
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
    showClients() {
        // Obtiene los datos del almacenamiento local
        let data = localStorage.getItem('clients');
    
        // Convierte los datos a un objeto JavaScript
        let clients = JSON.parse(data);
    
        // Verifica si hay clientes
        if (!clients) {
            console.log('No hay clientes registrados.');
            return;
        }
    
        // Obtiene el elemento HTML donde se mostrarán los clientes
        let clientList = document.getElementById('clientList');
    
        // Limpia el elemento HTML
        clientList.innerHTML = '';
    
        // Muestra los clientes
        for (let client of clients) {
            let li = document.createElement('li');
            let hasCardText = client.hasCard ? 'Sí' : 'No';
        
            // Si el cliente es VIP, no mostrar la información de la tarjeta
            if (client.type === 'vip') {
                li.textContent = `Tipo: ${client.type}, Nombre: ${client.name}, Apellido: ${client.surname}, DNI: ${client.dni}`;
            } else {
                li.textContent = `Tipo: ${client.type}, Nombre: ${client.name}, Apellido: ${client.surname}, DNI: ${client.dni}, ¿Tiene tarjeta?: ${hasCardText}`;
            }
        
            // Añade el elemento li al elemento ul
            clientList.appendChild(li);
        }
    }
}
let myFunctions = new functions();
document.getElementById('showClientsButton').addEventListener('click', function() {
    // Llama a la función showClients() a través de la instancia de Functions
    myFunctions.showClients();
});
// Añade un controlador de eventos para el botón de búsqueda
document.getElementById('searchButton').addEventListener('click', function() {
    // Recoge el DNI del campo de entrada
    let dni = document.getElementById('searchInput').value;

    // Llama a la función getClientByDni() a través de la instancia de Functions
    let client = myFunctions.getClientByDni(dni);

    if (client) {
        // Si se encuentra el cliente, muestra su información
        let hasCardText = client.hasCard ? 'Sí' : 'No';
        let li = document.createElement('li');

        if (client.type === 'vip') {
            li.textContent = `Tipo: ${client.type}, Nombre: ${client.name}, Apellido: ${client.surname}, DNI: ${client.dni}`;
        } else {
            li.textContent = `Tipo: ${client.type}, Nombre: ${client.name}, Apellido: ${client.surname}, DNI: ${client.dni}, ¿Tiene tarjeta?: ${hasCardText}`;
        }

        // Añade el elemento li al elemento ul
        clientList.appendChild(li);
    }
});
