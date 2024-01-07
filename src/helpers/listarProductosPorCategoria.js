import { productServices } from "../service/product-service.js";
import { crearPlantillaProducto } from "./crearPlantillaProducto.js";


export const listarProductosPorCategoria = async (categoria, categoriaEnHtml) => {

    const Consolas = document.querySelector(`[data-${categoriaEnHtml}]`);

    const data = await productServices.obtenerProductoPorCategoria(categoria);
    data.products.forEach(({ _id, imagen, categoria, nombre, precio, descripcion, autor }) => {
        const nuevoProducto = crearPlantillaProducto(
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