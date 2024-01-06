const signin= async (email,password)=>{
    try {
        const response= await fetch('http://localhost:4000/api/auth/signin',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json",
            },
            credentials:'include'
        });
        return await response.json();
    } catch (error) {
        console.log(error)
        return false;
    }
}

const signup= async (nombre,email,password)=>{
    try {
        const response= await fetch('http://localhost:4000/api/auth/signup',{
            method:'POST',
            body:JSON.stringify({nombre,email,password}),
            headers:{'Content-Type':'application/json'},
            credentials:'include'
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return false;
    }
}


const logout= async ()=>{
    try {
        const response=  await fetch('http://localhost:4000/api/auth/logout',{
            method:'POST',
            credentials:'include'
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getCuenta= async()=>{
    try {
        const response=  await fetch('http://localhost:4000/api/auth/getCuenta',{
            credentials:'include'
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return false;
    }
    
}

export const userServices={
    signin,
    signup,
    logout,
    getCuenta
}