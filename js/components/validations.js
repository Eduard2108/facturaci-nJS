
export default class Valida {
    solo_decimales(mensaje, mensajeError) {
        while (true) {
            let valor = prompt(`          ------>   | ${mensaje}`);
            try {
                valor = parseFloat(valor);
                if (valor > 0) {
                    break;
                }
            } catch {
                console.log(`          ------><  | ${mensajeError}`);
            }
        }
        return valor;
    }

    only_numbers(number_to_validate) {
        return /^\d+$/.test(number_to_validate);
    }

    only_letters(word_to_validate) {
        if (word_to_validate === null) {
            alert("No se ha ingresado nada");
            return false;
        }
        word_to_validate = word_to_validate.replace(/\s/g, "");
        return /^[A-Za-z]+$/.test(word_to_validate);
    }

    dni_valited(dni) {
        if (dni === null) {
            alert("No se ha ingresado nada");
            return false;
        }
        if (!(dni.length === 10 && /^\d+$/.test(dni))) {
            return false;
        }
        return true;
        }
    }
