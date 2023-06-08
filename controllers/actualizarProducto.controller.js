
import { productServices } from "../service/product-service.js";

const formulario=document.querySelector('[data-form]');


const obtenerInformacion= async()=>{

    const url = new URL(window.location);
  const id = url.searchParams.get("id");

    const categoria=document.querySelector('[data-categoria]')
    const nombre=document.querySelector('[data-nombre]');
    const precio=document.querySelector('[data-precio]');
    const descripcion=document.querySelector('[data-descripcion]');
  try {
    const producto = await productServices.detalleProducto(id);
    categoria.value=producto.categoria;
    nombre.value=producto.nombre;
    precio.value=producto.precio;
    descripcion.value=producto.descripcion;
  } catch (error) {
    // window.location.href = "/screens/error.html";
  }

}


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const imagen= document.querySelector('[data-imagen]').files;
    const categoria=document.querySelector('[data-categoria]').value;
    const nombre=document.querySelector('[data-nombre]').value;
    const precio=document.querySelector('[data-precio]').value;
    const descripcion=document.querySelector('[data-descripcion]').value;

    const data= new FormData();
    data.set('imagen',imagen[0]);
    data.set('categoria',categoria);
    data.set('nombre',nombre);
    data.set('precio',precio);
    data.set('descripcion',descripcion);
  
    try {
        const response=productServices.actualizarProducto(id,data);
        // mostrarAlerta();
        document.querySelector('[data-form]').reset();
      } catch (error) {
        console.log(error)
      }
  });

obtenerInformacion();

