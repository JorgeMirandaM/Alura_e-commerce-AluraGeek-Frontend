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

const palabraClave = document.querySelector("[data-buscador]");

const botonFiltrar = document.querySelector("[data-filtrarBtn]");

const seccionProductos = document.querySelector("[data-seccionProductos]");

const filtrarProductos = async () => {
  try {
    const data = await productServices.listarProductos();

    const productos = data.filter(
      (student) =>
        student.categoria === palabraClave.value ||
        student.nombre === palabraClave.value ||
        student.precio === palabraClave.value
    );

    const linea = document.createElement("div");
    const seccionIntorduccionPalabraClave = `<div class="producto__renglon" data-PCRenglon>
  <div class="titulo__verTodo">
    <h2>Busqueda por '${palabraClave.value}'</h2>
  </div>
  <div class="productos" data-palabraClave></div>
</div>`;
    linea.innerHTML = seccionIntorduccionPalabraClave;

    seccionProductos.appendChild(linea);

    const seccionPalabraClave = document.querySelector("[data-palabraClave]");

    productos.forEach(
      ({ id, imagen, categoria, nombre, precio, descripcion, autor }) => {
        const nuevoProducto = listarProducto(
          id,
          imagen,
          categoria,
          nombre,
          precio,
          descripcion
        );

        seccionPalabraClave.appendChild(nuevoProducto);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

botonFiltrar.addEventListener("click", () => {

    if(document.querySelector("[data-SWRenglon]")){
        document.querySelector("[data-SWRenglon]").remove();
    }
    if(document.querySelector("[data-CRenglon]")){
        document.querySelector("[data-CRenglon]").remove();
    }
    if(document.querySelector("[data-DRenglon]")){
        document.querySelector("[data-DRenglon]").remove();
    }
    if(document.querySelector("[data-PCRenglon]")){
        document.querySelector("[data-PCRenglon]").remove();
    }
  filtrarProductos();
});
