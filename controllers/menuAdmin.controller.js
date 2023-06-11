import { productServices } from "../service/product-service.js";

const listarProducto = (_id, imagen, categoria, nombre, precio, descripcion) => {
  const linea = document.createElement("div");
  const producto = `<div class="producto">
  <div class="producto__imagen">
    <img
      src=${imagen}
      alt=""
    />

    <div>
      <button type="button"
      id=${_id}><img src="../assets/iconos/basura.svg" alt="" /></button>
      <a href="ActualizarProducto.html?id=${_id}"><img src="../assets/iconos/lapiz.svg" alt="" /></a>
    </div>
  </div>
  <div class="producto__informacion">
    <p>${nombre}</p>
    <span>${precio}</span>
    <p></p>
  </div>
</div>`;
  linea.innerHTML = producto;

  const btn = linea.querySelector("button");
  btn.addEventListener("click", async () => {
    const id = btn.id;
    try{
      const respuesta= await productServices.eliminarProducto(id)
      window.location.reload();
    }catch(e){
      alert('Ocurrio un error')
    }
  });

  return linea;
};

const productos = document.querySelector("[data-productos]");

const listarProductos = async () => {
  try {
    const data = await productServices.listarProductos();
    data.forEach(({ _id, imagen, categoria, nombre, precio, descripcion,autor }) => {
      const nuevoProducto = listarProducto(
        _id,
        imagen,
        categoria,
        nombre,
        precio,
        descripcion,
      );
      productos.appendChild(nuevoProducto)
    });
  } catch (error) {
    alert("Ocurrio un error");
  }
};

listarProductos();
