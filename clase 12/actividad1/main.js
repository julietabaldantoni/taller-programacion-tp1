import Cliente from "./cliente.js";
const mostrar = () => {
    const nombre = document.getElementById("imp_nombre").value;
    const apellido = document.getElementById("imp_apellido").value;
    const dni = document.getElementById("imp_dni").value;
    //creamos la instancia de clase que nos va a permitir tener acceso a los metodos y atributos e la clase
    let cliente=new Cliente(nombre,apellido,dni)

    //ejecute el metodo de la clase
    cliente.mostrar_datospersonales()
}
document.getElementById("btn_mostrar").addEventListener("click",mostrar)