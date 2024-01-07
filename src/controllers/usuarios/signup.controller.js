
import { userServices } from "../../service/user-service.js";


const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;


    const response = userServices.signup(nombre, email, password);
    if (response.ok===false || response===false) {
        Swal.fire({
            title: 'Error!',
            text: 'Error en la petición',
            icon: 'error',
            timer: 1500
          })
        return;
    }
    document.querySelector('[data-form]').reset();


})