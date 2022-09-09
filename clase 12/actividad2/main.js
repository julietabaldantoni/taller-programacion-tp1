

import Pitagora from "./pitagora.js";
const calcular= () => {
    let pitagora= new Pitagora()

    pitagora.co=document.getElementById("inp_opuesto").value
    pitagora.ca=document.getElementById("inp_adyacente").value

    
    pitagora.mostrar_hipotenusa()

}
document.getElementById("btn_calcular").addEventListener("click",calcular)

