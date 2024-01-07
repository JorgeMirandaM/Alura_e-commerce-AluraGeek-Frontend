import { crearPlantillaProducto } from "../../helpers/crearPlantillaProducto.js";
import { productServices } from "../../service/product-service.js";

const productoDetalle = document.querySelector("[data-productoDetalle]");

const dataProductos = document.querySelector("[data-productos]");

const listarProducto = (_id, imagen, categoria, nombre, precio, descripcion) => {
  const linea = document.createElement("div");
  const producto = `<div class="ProductoDetallado__imagen">
  <img src=${imagen} alt="" />
</div>
<div class="ProductoDetallado__tituloPrecioDescripcion">
  <h2>${nombre}</h2>
  <div>
    <span>${precio}</span>
    <p>
    ${descripcion}
    </p>
  </div>
</div>`;
  linea.innerHTML = producto;
  return linea;
};



const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const {productDoc} = await productServices.detalleProducto(id);

  const productoDetallado = listarProducto(productDoc._id, productDoc.imagen, productDoc.categoria, productDoc.nombre, productDoc.precio, productDoc.descripcion);

  productoDetalle.appendChild(productoDetallado);

  const {products} = await productServices.listarProductos();

  console.log(products)

  const productos = products.filter(
    (student) =>
      student.categoria === productDoc.categoria
  );

  productos.forEach(
    ({ _id, imagen, categoria, nombre, precio, descripcion, autor }) => {
      const nuevoProducto = crearPlantillaProducto(
        _id,
        imagen,
        categoria,
        nombre,
        precio,
        descripcion
      );
      dataProductos.appendChild(nuevoProducto);
    }
  );
};

obtenerInformacion();
