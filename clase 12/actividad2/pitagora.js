
export default class Pitagora{
    co=''
    ca=''
    constructor()
    {

    }
    mostrar_hipotenusa()
    {
        let bloque1= Math.pow(this.co,2)+Math.pow(this.ca,2)
        const hipotenusa=Math.sqrt(bloque1)
        console.log(hipotenusa)
    }

}