const listarProductos = async ()=>{
    const respuesta = await fetch('https://backend-alurageek.onrender.com/products/getProducts');
    return await respuesta.json();
}



const crearProducto= async (data)=>{
    return await fetch('https://backend-alurageek.onrender.com/products/createProduct',{
        method:'POST',
        body:data,
        
        credentials:'include'
    })
}

const eliminarProducto= async (id)=>{
    return await fetch(`https://backend-alurageek.onrender.com/products/deleteProductById/${id}`,{
        method:'DELETE',
        credentials:'include'
    })
}

const detalleProducto= async (id)=>{
    const response= await fetch(`https://backend-alurageek.onrender.com/products/getProductById/${id}`,{
        method:'GET',
    });
    return await response.json();
}

const actualizarProducto= async (id,data)=>{
    try {
        const response= await fetch(`https://backend-alurageek.onrender.com/products/updateProductById/${id}`,{
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