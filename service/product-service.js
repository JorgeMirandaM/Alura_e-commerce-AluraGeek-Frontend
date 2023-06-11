const listarProductos = async ()=>{
    const respuesta = await fetch('http://localhost:4000/products/getProducts');
    return await respuesta.json();
}



const crearProducto= async (data)=>{
    return await fetch('http://localhost:4000/products/createProduct',{
        method:'POST',
        body:data,
        
        credentials:'include'
    })
}

const eliminarProducto= async (id)=>{
    return await fetch(`http://localhost:4000/products/deleteProductById/${id}`,{
        method:'DELETE',
        credentials:'include'
    })
}

const detalleProducto= async (id)=>{
    const response= await fetch(`http://localhost:4000/products/getProductById/${id}`,{
        method:'GET',
    });
    return await response.json();
}

const actualizarProducto= async (id,data)=>{
    try {
        const response= await fetch(`http://localhost:4000/products/updateProductById/${id}`,{
            method:'PUT',
            body:data,
            credentials:'include'
        })

        return response;
    } catch (error) {
        console.log(error)
    }
}




export const productServices={
    listarProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}