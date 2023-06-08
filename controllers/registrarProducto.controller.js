
// import swal from "sweetalert";
import { productServices } from "../service/product-service.js";

const formulario= document.querySelector("[data-form]");

// const mostrarAlerta = () => {
//     swal({
//       title: "Producto registrado con exito!",
//       icon: "success",
//       timer: 3000,
//     });
//   };


  formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
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
      const response=productServices.crearProducto(data);
      // mostrarAlerta();
      document.querySelector('[data-form]').reset();
    } catch (error) {
      console.log(error)
    }
    
  })
