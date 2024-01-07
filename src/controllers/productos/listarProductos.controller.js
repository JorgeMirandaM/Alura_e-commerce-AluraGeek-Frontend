import { crearPlantillaProducto } from "../../helpers/crearPlantillaProducto.js";
import { productServices } from "../../service/product-service.js";


const StarWars = document.querySelector("[data-StarWars]");
const Consolas = document.querySelector("[data-Consolas]");
const Diversos = document.querySelector("[data-Diversos]");

const listarProductos = async () => {
  
    const response = await productServices.listarProductos();

    if (response.ok === false || response===false) {
      Swal.fire({
        title: 'Error!',
        text: 'Error en la petición',
        icon: 'error',
        timer: 1500
      })
      return
    }
    response.products.forEach(({ _id, imagen, categoria, nombre, precio, descripcion,autor }) => {
      const nuevoProducto = crearPlantillaProducto(
        _id,
        imagen,
        categoria,
        nombre,
        precio,
        descripcion,
      );
      if(categoria=='Star Wars'){
        StarWars.appendChild(nuevoProducto);
      }else if(categoria=='Consolas'){
        Consolas.appendChild(nuevoProducto);
      }else{
        Diversos.appendChild(nuevoProducto);
      }
    });
 
};

listarProductos();
