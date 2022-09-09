export default class cliente{
    dni=''
    apellido=''
    nombre=''
    constructor(nombre,apellido,dni)
    {
        this.nombre=nombre
        this.apellido=apellido
        this.dni=dni
    }
    mostrar_datospersonales(){
        console.log(`los datos ingresados son:${this.nombre}, ${this.apellido}, ${this.dni}`)
    }
    
}