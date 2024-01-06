

import { productServices } from "../../service/product-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  const imagen = document.querySelector('[data-imagen]').files;
  const categoria = document.querySelector('[data-categoria]').value;
  const nombre = document.querySelector('[data-nombre]').value;
  const precio = document.querySelector('[data-precio]').value;
  const descripcion = document.querySelector('[data-descripcion]').value;

  const data = new FormData();
  data.set('imagen', imagen[0]);
  data.set('categoria', categoria);
  data.set('nombre', nombre);
  data.set('precio', precio);
  data.set('descripcion', descripcion);

  const response = await productServices.crearProducto(data);
  console.log(response)

  if (response.ok==false || response===false) {
    Swal.fire({
      title: 'Error!',
      text: 'Error en la petición',
      icon: 'error',
      timer: 1500
    })
    document.querySelector('[data-form]').reset();
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 2000);
    return
  } 

  document.querySelector('[data-form]').reset();

  Swal.fire({
    icon: "success",
    title: "Registro con exito",
    timer: 1500
  })
  
  setTimeout(() => {
    window.location.href = "MenuAdmin.html";
  }, 2000);
  


})
