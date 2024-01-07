import { userServices } from "../../service/user-service.js";

const getNavAdmin = () => {
  const linea = document.createElement("div");
  const nav = `
    <a href="MenuAdmin.html">Menu Administrador</a>
    <button type="button" data-logout>Logout</button>
    `;
  linea.innerHTML = nav;
  return linea;
};

const getNav = () => {
  const linea = document.createElement("div");
  const nav = `
    <a href="Login.html">Login</a>
    `;
  linea.innerHTML = nav;
  return linea;
};

const getCuenta = async () => {
  const response = await userServices.getCuenta();
  const nav = document.querySelector("[data-nav]");

  if (response.ok) {

    const navAdmin = getNavAdmin();
    nav.appendChild(navAdmin);

    const btnLogout = document.querySelector('[data-logout]');

    btnLogout.addEventListener('click', async () => {

      const response = await userServices.logout();

      if (!response.ok===false | response===false) {
        Swal.fire({
          title: 'Error!',
          text: 'Error en la petición',
          icon: 'error',
          timer: 1500
        })
        return
      }

      window.location.href = "index.html";
    })

  } else {
    const navAdmin = getNav();
    nav.appendChild(navAdmin);
  }
};

getCuenta();
