 export default class Vehiculo{
    modelo=''
    constructor(kilometraje)
    {
        this.km=kilometraje
    }
    mostrar_kilometraje()
    {
        console.log(`El kilometraje de mi vehiculo es igual a ${this.km}km`)
    }
    mostrar_modelo(){
        console.log(this.modelo)
    }

}