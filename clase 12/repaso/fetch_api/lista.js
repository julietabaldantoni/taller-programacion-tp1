
async function obtener_usuario(){

    let usuarios=await fetch('https://jsonplaceholder.typicode.com/users')

    let usuarios_definitivos=await usuarios.json()

    let items=[]
    usuarios_definitivos.forEach(element => {

        let item=`<li class="list-group-item"> ${element.username}</li>`

        items.push(item)
    });
    document.getElementById("lista_usuario").innerHTML= items.join("")
}
obtener_usuario()