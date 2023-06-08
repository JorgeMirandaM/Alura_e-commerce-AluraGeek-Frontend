// import swal from "sweetalert";
import { userServices } from "../service/user-service.js";


const formulario = document.querySelector("[data-form]");

// const mostrarAlerta = () => {
//     swal({
//       title: "Usuario registrado con exito!",
//       icon: "success",
//       timer: 3000,
//     });
//   };

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombre=document.querySelector("[data-nombre]").value;
    const email= document.querySelector("[data-email]").value;
    const password= document.querySelector("[data-password]").value;

    try {
        const response=userServices.signup(nombre,email,password);
        // mostrarAlerta();
        document.querySelector('[data-form]').reset();
    } catch (error) {
        console.log(error)
    }

})