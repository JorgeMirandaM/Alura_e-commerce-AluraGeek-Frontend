export const valida=(input)=>{
    console.log(input.validity)
    const tipoDeInput= input.dataset.tipo;
    

    if(input.validity.valid){
        input.parentElement.classList.remove("formulario__form__contenedor-incorrecto");
        input.parentElement.querySelector("input-message-error").innerHTML=""
    } else{
        input.parentElement.classList.add("formulario__form__contenedor-incorrecto");
        input.parentElement.querySelector("input-message-error").innerHTML=mostrarMensajeDeError(tipoDeInput,input)
    }
    
}

const tipoDeErroes=[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajesDeError={
    nombre:{
        valueMissing:"El campo nombre no puede estar vacio"
    },
    mensaje:{
        valueMissing:"El campo correo no puede estar vacio",
    },
    email:{
        valueMissing:"El campo correo no puede estar vacio",
        typeMismatch:"El correo no es valido"
    },
    password:{
        valueMissing:"El campo password no puede estar vacio",
        patternMismatch:"Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
   
    
    
}


const mostrarMensajeDeError=(tipoDeInput,input)=>{
    let mensaje = "";
    tipoDeErroes.forEach(error=>{
        if(input.validity[error]){
            mensaje=mensajesDeError[tipoDeInput][error]
        }
    })


    return mensaje;
}



