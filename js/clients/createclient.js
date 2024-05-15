import Valida from "../components/validations.js";
let clients = [];
const validated = new Valida()
class functions{
    createRegularClient(name, surname, dni, type, hasCard) {
        let regularClient = {
            type: type,
            name: name,
            surname: surname,
            dni: dni,
            hasCard: hasCard
        };
    
        return regularClient;
    }
    createVipClient(name, surname, dni, type) {
        let VipClient = {
            type: type,
            name: name,
            surname: surname,
            dni: dni,
        };
    
        return VipClient;
    }
}

let myFunctions = new functions();
document.getElementById('type').addEventListener('change', function() {
    let type = document.getElementById('type').value;
    let cardField = document.getElementById('cardField');

    if (type === 'vip') {
        cardField.style.display = 'none';
    } else {
        cardField.style.display = 'block';
    }
});
document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let type = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let dni = document.getElementById('dni').value;
    let hasCard = document.getElementById('hasCard').checked;

        // Usa la función dni_valited para validar el DNI
        if (!validated.dni_valited(dni)) {
            alert('DNI inválido');
            return;
        }
        if (!validated.only_letters(name)) {
            alert('El nombre solo puede contener letras');
            name = name.replace(/[^A-Za-z\s]/g, '');
            return;
        }
        if (!validated.only_letters(surname)) {
            alert('El apellido solo puede contener letras');
            surname = surname.replace(/[^A-Za-z\s]/g, '');
            return;
        }
    let newClient;
    if (type === 'regular') {
        newClient = myFunctions.createRegularClient(name, surname, dni, type, hasCard);
    } else if (type === 'vip') {
        newClient = myFunctions.createVipClient(name, surname, dni, type);
    }

    clients.push(newClient);
    localStorage.setItem('clients', JSON.stringify(clients));

    alert('Cliente creado con éxito');
});
