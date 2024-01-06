import { productServices } from "../../service/product-service.js";

const listarDiverso = (_id, imagen, categoria, nombre, precio, descripcion) => {
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
      <a href="./src/pages/Producto.html?id=${_id}">Ver producto</a>
    </div>
  </div>`;
  linea.innerHTML = producto;
  return linea;
};

const Diversos = document.querySelector("[data-Diversos]");

const listarDiversos = async () => {
  
    const data = await productServices.listarProductos();
    data.products.forEach(({ _id, imagen, categoria, nombre, precio, descripcion,autor }) => {
      const nuevoProducto = listarDiverso(
        _id,
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
  
};

listarDiversos();
