import { userServices } from "../service/user-service.js";

const getNavAdmin = () => {
  const linea = document.createElement("div");
  const nav = `
    <a href="./MenuAdmin.html">Menu Administrador</a>
    <button>Logout</button>
    `;

  linea.innerHTML = nav;
  return linea;
};

const getNav = () => {
  const linea = document.createElement("div");
  const nav = `
    <a href="./Login.html">Login</a>
    `;

  linea.innerHTML = nav;
  return linea;
};

const getCuenta = async () => {
  const response = userServices.getCuenta();

  const nav = document.querySelector("[data-nav]");

  const userData = await response;


  if (userData) {
    const navAdmin = getNavAdmin();
    nav.appendChild(navAdmin);
  } else {
    const navAdmin = getNav();
    nav.appendChild(navAdmin);
  }
};

getCuenta();
