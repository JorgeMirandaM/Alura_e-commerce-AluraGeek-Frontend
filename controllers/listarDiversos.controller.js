import { productServices } from "../service/product-service.js";

const listarDiverso = (id, imagen, categoria, nombre, precio, descripcion) => {
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

const Diversos = document.querySelector("[data-Diversos]");

const listarDiversos = async () => {
  try {
    const data = await productServices.listarProductos();
    data.forEach(({ id, imagen, categoria, nombre, precio, descripcion,autor }) => {
      const nuevoProducto = listarDiverso(
        id,
        imagen,
        categoria,
        nombre,
        precio,
        descripcion,
      );
      
      if(categoria=='Diversos'){
        Diversos.appendChild(nuevoProducto);
      }
    });
  } catch (error) {
    alert("Ocurrio un error");
  }
};

listarDiversos();
