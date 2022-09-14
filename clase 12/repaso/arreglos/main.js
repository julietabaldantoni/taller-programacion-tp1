let helados=['Banana Split','Menta granizada','Cereza','Dulce de leche','Maracuya','Vainilla','Frutos Rojos','Pistacho']

//como obtener la longitud de un arreglo
let longitud= helados.length
console.log('longitud: '+ longitud)

//como obtengo el ultimo elemento de u arreglo(array)
let ultimo= helados[longitud-1]
console.log('ultimo elemento: '+ ultimo)

//como agrego un elemento al final de un arreglo
helados.push('crema rusa')
console.log(helados)

//como eliminar el ultimo elemento de un arreglo
helados.pop()
console.log(helados)

//como agregar un elemento al inicio de un arreglo
helados.unshift('marroc')
console.log(helados)

//como eliminar el primer elemento de un arreglo
helados.shift()
console.log(helados)

//como obtener el indice(pocision) de un elemento
let indice_cereza=helados.indexOf('Cereza')
console.log('indice de cereza:'+indice_cereza)
console.log(helados[indice_cereza])

//como elimino un objeto conociendo su indice
helados.splice(indice_cereza,1)
console.log(helados)

//como eliminamos mas de un elemento
helados.splice(indice_cereza,2) //se elimina sereza y el siguiente
console.log(helados)

//como agrego mas de unelemento dentro de un arreglo
helados.splice(1,0,'Dulce de leche')
console.log(helados)