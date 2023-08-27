const nombre = document.getElementById("nameInput");
const apellido = document.getElementById("surnameInput");
const correo = document.getElementById("emailInput");
const celular = document.getElementById("cellInput");
const fecha = document.getElementById("dateInput");
const invitados = document.getElementById("numInput");
const zona = document.getElementById("zoneInput");
const lugar = document.getElementById("placeInput");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
        enviarFormulario();
    }
})

function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        mostrarMensajeError("nameInput", "Nombre no vélido*");
        condicion = false;
    }
    if (apellido.value.length < 1 || apellido.value.trim() == "") {
        mostrarMensajeError("surnameInput", "Apellido no válido*");
        condicion = false;
    }
    if (correo.value.length < 1 || correo.value.trim() == "") {
        mostrarMensajeError("emailInput", "Correo no válido*");
        condicion = false;
    }
    if (celular.value.length != 10 || celular.value.trim() == "" || isNaN(celular.value)) {
        mostrarMensajeError("cellInput", "Celular no válido*");
        condicion = false;
    }
    if (fecha.value.length < 1 || fecha.value.trim() == "") {
        mostrarMensajeError("dateInput", "Fecha no válida*");
        condicion = false;
    }
    if (invitados.value.length < 1 || invitados.value.trim() == "") {
        mostrarMensajeError("numInput", "Número de invitados no válido*");
        condicion = false;
    }
    if (zona.value.length < 1 || zona.value.trim() == "") {
        mostrarMensajeError("zoneInput", "Zona no válida*");
        condicion = false;
    }
    if (lugar.value == 0 || lugar.value.trim() == "") {
        mostrarMensajeError("placeInput", "Opción no válida*");
        condicion = false;
    }
    return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Datos cargados con éxito!!";
}

function capturar() {
    function Evento(nombre, apellido, email, telefono, fecha, invitados, zona, parrilla) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.fecha = fecha;
        this.invitados = invitados;
        this.zona = zona;
        this.parrilla = parrilla;
    }
    
    let nombreCap = document.getElementById("nameInput").value;
    let apellidoCap = document.getElementById("surnameInput").value;
    let emailCap = document.getElementById("emailInput").value;
    let telefonoCap = document.getElementById("cellInput").value;
    let fechaCap = document.getElementById("dateInput").value;
    let invitadosCap = document.getElementById("numInput").value;
    let zonaCap = document.getElementById("zoneInput").value;
    let parrillaCap = document.getElementById("placeInput").value;

    nuevoEvento = new Evento(nombreCap, apellidoCap, emailCap, telefonoCap, fechaCap, invitadosCap, zonaCap, parrillaCap);
    agregar()
}

let baseClientes = [];
function agregar() {
    baseClientes.push(nuevoEvento);
    document.getElementById('tabla').innerHTML += '<tbody><td>' + nuevoEvento.nombre + '</td><td>' + nuevoEvento.apellido + '</td><td>' + nuevoEvento.email + '</td><td>' + nuevoEvento.telefono + '</td><td>' + nuevoEvento.fecha + '</td><td>' + nuevoEvento.invitados + '</td><td>' + nuevoEvento.zona + '</td><td>' + nuevoEvento.parrilla + '</td></tbody>';
};
