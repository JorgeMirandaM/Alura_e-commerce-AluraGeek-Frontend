
import { productServices } from "../../service/product-service.js";

const formulario = document.querySelector('[data-form]');


const obtenerInformacion = async () => {

  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const categoria = document.querySelector('[data-categoria]')
  const nombre = document.querySelector('[data-nombre]');
  const precio = document.querySelector('[data-precio]');
  const descripcion = document.querySelector('[data-descripcion]');

  const response = await productServices.detalleProducto(id);

  if (response.ok === false || response===false) {
    Swal.fire({
      title: 'Error!',
      text: 'Error en la petición',
      icon: 'error',
      timer: 1500
    })
    return
  }
  

  
  categoria.value = response.productDoc.categoria;
  nombre.value = response.productDoc.nombre;
  precio.value = response.productDoc.precio;
  descripcion.value = response.productDoc.descripcion;
}





formulario.addEventListener("submit",async (e) => {
  e.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get("id");
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

    const response = await productServices.actualizarProducto(id, data);

    if (response.ok === false || response===false) {
      Swal.fire({
        title: 'Error!',
        text: 'Error en la petición',
        icon: 'error',
        timer: 1500
      })
      document.querySelector('[data-form]').reset();
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
      return
    }
    
    document.querySelector('[data-form]').reset();

    Swal.fire({
      icon: "success",
      title: "Actualización con exito",
      timer: 1500
    })

    setTimeout(() => {
      window.location.href = "MenuAdmin.html";
    }, 2000);
 
});

obtenerInformacion();

