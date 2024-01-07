import { crearPlantillaProducto } from "../../helpers/crearPlantillaProducto.js";
import { productServices } from "../../service/product-service.js";


const StarWars = document.querySelector("[data-StarWars]");
const Consolas = document.querySelector("[data-Consolas]");
const Diversos = document.querySelector("[data-Diversos]");

const listarProductos = async () => {
  
    const data = await productServices.listarProductos();
    data.products.forEach(({ _id, imagen, categoria, nombre, precio, descripcion,autor }) => {
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
