//funcion asincrona(se agrega async antes de function)
async function generar_tabla(){

   //realiza por defecto una solicitud http a traves del metodo get
    let datos=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    let comentarios=await datos.json()

    let filas=[]
    //ejecuta los efectos secundarios al final de la cadena,siempre devuelve el valor undefined y no es encadenable
    comentarios.forEach(element => {
       let fila=`
       <tr>
            <td>${element.symbol}</td>
            <td>${element.name}</td>
            <td> <img src="${element.image}" style="width:4rem" > </td>
            <td>${element.current_price}</td>
            <td>${element.total_volume}</td>
       </tr>
        `

        filas.push(fila)
    });

    document.getElementById("cuerpo").innerHTML= filas.join('')

}
generar_tabla()
