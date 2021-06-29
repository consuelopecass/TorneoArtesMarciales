//acá estoy creando la super-clase y el constructor
export default class Personaje {
    constructor(nombre, img, poder, raza) {
        //acá se hace clousures y encapsulamiento para proteger los datos privados

        let Nombre = nombre
        let Img = img
        let Poder = poder
        let Raza = raza

        //acá estoy generando los get que serán de acceso público
        this.getNombre = () => Nombre
        this.getImg = () => Img
        this.getPoder = () => Poder
        this.getRaza = () => Raza

        //acá el set que recibe como parámetro el poder que seleccione el usuario
        this.setPoder = (poder) => (Poder = poder);
    }

    //acá creo los métodos get
    get Nombre() {
        return this.getNombre();
    }
    get Img() {
        return this.getImg();
    }
    get Poder() {
        return this.getPoder();
    }
    get Raza() {
        return this.getRaza();
    }

    //acá el método set 
    set Poder(poder) {
        return this.getPoder(poder);
    }
}
/*
Comprobando que la clase funciona
console.log(new Personaje('Goku', '...', 1234, 'wewe'));
*/

/* 
El export default también se puede agregar acá, de esta forma: 
export default Personaje; 
 */