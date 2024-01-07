


export const crearPlantillaProducto = (_id, imagen, categoria, nombre, precio, descripcion) => {
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
        <a href="Producto.html?id=${_id}">Ver producto</a>
      </div>
    </div>`;
    linea.innerHTML = producto;
    return linea;
};
