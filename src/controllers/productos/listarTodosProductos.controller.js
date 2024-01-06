import { productServices } from "../../service/product-service.js";

const listarProducto = (_id, imagen, categoria, nombre, precio, descripcion) => {
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


const seccionProductos = document.querySelector("[data-seccionProductos]");

const botonVerTodo = document.querySelector('[data-btnVerTodo]')

const verTodoProductos = async () => {

  const {products} = await productServices.listarProductos();


  const linea = document.createElement("div");
  const seccionIntorduccionPalabraClave = `<div class="producto__renglon" data-PCRenglon>
  <div class="titulo__verTodo">
    <h2>Todos los productos</h2>
  </div>
  <div class="productos" data-palabraClave></div>
</div>`;
  linea.innerHTML = seccionIntorduccionPalabraClave;

  seccionProductos.appendChild(linea);

  const seccionPalabraClave = document.querySelector("[data-palabraClave]");

  products.forEach(
    ({ _id, imagen, categoria, nombre, precio, descripcion, autor }) => {
      const nuevoProducto = listarProducto(
        _id,
        imagen,
        categoria,
        nombre,
        precio,
        descripcion
      );
      seccionPalabraClave.appendChild(nuevoProducto);
    }
  );

};

botonVerTodo.addEventListener("click", () => {

  if (document.querySelector("[data-SWRenglon]")) {
    document.querySelector("[data-SWRenglon]").remove();
  }
  if (document.querySelector("[data-CRenglon]")) {
    document.querySelector("[data-CRenglon]").remove();
  }
  if (document.querySelector("[data-DRenglon]")) {
    document.querySelector("[data-DRenglon]").remove();
  }
  if (document.querySelector("[data-PCRenglon]")) {
    document.querySelector("[data-PCRenglon]").remove();
  }
  verTodoProductos();
});
