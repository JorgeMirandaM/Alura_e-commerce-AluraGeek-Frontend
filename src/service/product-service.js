const listarProductos = async ()=>{
    try {
        const respuesta = await fetch('http://localhost:4000/api/productos/getProducts');
        return await respuesta.json();
    } catch (error) {
        console.log(error);
        return false;
    }
}



const crearProducto= async (data)=>{
    try {
        const response= await fetch('http://localhost:4000/api/productos/createProduct',{
            method:'POST',
            body:data,
            credentials:'include'
        })
    
        return await response.json();
    } catch (error) {
        console.log(error);
        return false;
    }
}

const eliminarProducto= async (id)=>{
    try {
         const response= await fetch(`http://localhost:4000/api/productos/deleteProductById/${id}`,{
            method:'DELETE',
            credentials:'include'
        })
        
        return response;
    } catch (error) {
        console.log(error);
    }
}

const detalleProducto= async (id)=>{
    try {
        const response= await fetch(`http://localhost:4000/api/productos/getProductById/${id}`,{
            method:'GET',
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return false;
    }
}

const actualizarProducto= async (id,data)=>{
    
    try {
        const response= await fetch(`http://localhost:4000/api/productos/updateProductById/${id}`,{
            method:'PUT',
            body:data,
            credentials:'include'
        })

        return await response.json();
    } catch (error) {
        console.log(error);
        return false;
    }
}




export const productServices={
    listarProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}