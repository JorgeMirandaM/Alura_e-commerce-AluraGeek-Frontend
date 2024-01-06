import { productServices } from "../../service/product-service.js";

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

    const response = await productServices.eliminarProducto(id);
    if (response.ok === false) {
      Swal.fire({
        title: 'Error!',
        text: 'Error en la petición',
        icon: 'error',
        timer: 1500
      })
      setTimeout(() => {
        window.location.href = "/index.html";
      }, 2000);
      return
    }

    Swal.fire({
      icon: "success",
      title: "Eliminado con exito",
      timer: 1500
    })

    setTimeout(() => {
      window.location.reload();
    }, 2000);




  });

  return linea;
};

const productos = document.querySelector("[data-productos]");

const listarProductos = async () => {

  const data = await productServices.listarProductos();
  data.products.forEach(({ _id, imagen, categoria, nombre, precio, descripcion, autor }) => {
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

};

listarProductos();
