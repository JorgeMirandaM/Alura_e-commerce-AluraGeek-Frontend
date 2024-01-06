import { valida } from "./validaciones.js";

const inputs= document.querySelectorAll("input");

const textarea=document.querySelectorAll('textarea');

inputs.forEach(input => {
    input.addEventListener('blur',input =>{
        valida(input.target)
    })
})


textarea.forEach(input => {
    input.addEventListener('blur',input =>{
        valida(input.target)
    })
})