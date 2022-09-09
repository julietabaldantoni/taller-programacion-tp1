import Vehiculo from "./vehiculos.js";
//funcion flecha forma 1
const mostrar = () => {
    const km = document.getElementById("imp_km").value;

    //temlate string
   
    //creamos la instancia de clase que nos va a permitir tener acceso a los metodos y atributos e la clase
    let vehiculo=new Vehiculo(km)
    //ejecute el metodo de la clase
    vehiculo.mostrar_kilometraje()
}
document.getElementById("btn_mostrar").addEventListener("click",mostrar)



//forma 2 funcion flecha
const mostrar_forma2= ( )=> {
    const mod=document.getElementById("imp_modelo").value

    let vehiculo= new Vehiculo()
    vehiculo.modelo= mod
    vehiculo.mostrar_modelo() 
}
document.getElementById("btn_modelo").addEventListener("click",mostrar_forma2)

