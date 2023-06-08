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
    return await fetch(`http://localhost:4000/products/${id}`,{
        method:'DELETE',
        credentials:'include'
    })
}

const detalleProducto= async (id)=>{
    const response= await fetch(`http://localhost:4000/actualizarProductos/${id}`,{
        method:'GET',
        credentials:'include'
    });
    return await response.json();
}

const actualizarProducto= async (data)=>{
    try {
        const response= await fetch(`http://localhost:4000/products`,{
            method:'PUT',
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