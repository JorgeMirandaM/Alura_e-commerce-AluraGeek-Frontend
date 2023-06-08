import { productServices } from "../service/product-service.js";

const listarProducto = (id, imagen, categoria, nombre, precio, descripcion) => {
  const linea = document.createElement("div");
  const producto = `<div class="producto">
    <div class="producto__imagen">
      <img
        src=${imagen}
        alt=""
      />
    </div>
    <div class="producto__informacion">
      <p>${nombre}</p>
      <span>${precio}</span>
      <a href='../screens/Producto.html'>Ver producto</a>
    </div>
  </div>`;
  linea.innerHTML = producto;
  return linea;
};

const StarWars = document.querySelector("[data-StarWars]");
const Consolas = document.querySelector("[data-Consolas]");
const Diversos = document.querySelector("[data-Diversos]");

const listarProductos = async () => {
  try {
    const data = await productServices.listarProductos();
    data.forEach(({ id, imagen, categoria, nombre, precio, descripcion,autor }) => {
      const nuevoProducto = listarProducto(
        id,
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
  } catch (error) {
    alert("Ocurrio un error");
  }
};

listarProductos();
