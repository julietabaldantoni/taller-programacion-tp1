//vamos a crear un objeto
//json
let datos_personales={
    nombre:'pepito',
    apellido:'rodriguez',
    dni:44987654,
    correos:{
        gmail:'pepito@gmail.com',
        outlook:'pepis@outlook.com',
        yahoo:'pepe@yahoo.com.ar'

    },
    edad:25   
}
//forma 1 
/*const gmail= datos_personales.correos.gmail
const outlook =datos_personales.correos.outlook
const yahoo =datos_personales.correos.

console.log(`
    Gmail: ${gmail}
    Outlook: ${outlook}
    yahoo: ${yahoo}

`)
*/

//forma 2- destructuring object
const {gmail,yahoo,outlook} = datos_personales.correos
console.log(`

    Gmail: ${gmail}
    Outlook: ${outlook}
    yahoo: ${yahoo}

`)

//consumo de api
//funcion asincrona(se agrega async antes de function)
async function consumir_api(){
    //realiza por defecto una solicitud http a traves del metodo get
    let publicaciones=await fetch('https://jsonplaceholder.typicode.com/posts')

    let publicaciones_definitivas=await publicaciones.json()

    publicaciones_definitivas.forEach(element => {
        console.log(element.title)
    });

   

}
consumir_api()