import { productServices } from "../service/product-service.js";


const crearProducto = (_id, imagen, categoria, nombre, precio, descripcion) => {
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



export const listarProducto = async (categoria, categoriaEnHtml) => {

    const Consolas = document.querySelector(`[data-${categoriaEnHtml}]`);

    const data = await productServices.obtenerProductoPorCategoria(categoria);
    data.products.forEach(({ _id, imagen, categoria, nombre, precio, descripcion, autor }) => {
        const nuevoProducto = crearProducto(
            _id,
            imagen,
            categoria,
            nombre,
            precio,
            descripcion,
        );
        Consolas.appendChild(nuevoProducto);

    });

}