const signin= async (email,password)=>{
    
    return response= await fetch('http://localhost:4000/api/auth/signin',{
        method:'POST',
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json",
        },
        credentials:'include'
    })
}

const signup= async (nombre,email,password)=>{
    return response= await fetch('http://localhost:4000/api/auth/signup',{
        method:'POST',
        body:JSON.stringify({nombre,email,password}),
        headers:{'Content-Type':'application/json'},
        credentials:'include'

    })
}


const logout= async ()=>{
    return response= await fetch('http://localhost:4000/api/auth/logout',{
        method:'POST',
        credentials:'include'
    })
}

const getCuenta= async()=>{
     const response= await fetch('http://localhost:4000/api/auth/getCuenta',{
        credentials:'include'
    })

    if(response.ok){
        return await response.json();
    }else{
        return false;
    }
}

export const userServices={
    signin,
    signup,
    logout,
    getCuenta
}