import { userServices } from "../../service/user-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;

    const response = await userServices.signin(email, password);
    if (response.ok===false || response===false) {
        Swal.fire({
            title: 'Error!',
            text: 'Error en la petición',
            icon: 'error',
            timer: 1500
          })
        return;
    }

    window.location.href = "MenuAdmin.html";
})