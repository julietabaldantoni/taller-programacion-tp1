async function generar_tabla(){
   
    let datos=await fetch('https://jsonplaceholder.typicode.com/comments')

    let comentarios=await datos.json()

    let filas=[]
    comentarios.forEach(element => {
       let fila=`
       <tr>
            <td>${element.name}</td>
            <td>${element.email}</td>
       </tr>
        `

        filas.push(fila)
    });

    document.getElementById("cuerpo").innerHTML= filas.join('')

}
generar_tabla()
