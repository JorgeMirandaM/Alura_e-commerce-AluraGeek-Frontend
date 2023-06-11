import { userServices } from "../service/user-service.js";



const formulario= document.querySelector("[data-form]");



formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email= document.querySelector("[data-email]").value;
    const password= document.querySelector("[data-password]").value;

    

    try {
        const response=userServices.signin(email,password);
        window.location.href="MenuAdmin.html";

    } catch (error) {
        console.log(error)
    }
})