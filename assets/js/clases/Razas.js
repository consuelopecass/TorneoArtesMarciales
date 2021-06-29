import Personaje from "./Personaje.js";

//clase Saiyayin = clase hija de Personaje
class Saiyajin extends Personaje {
    constructor(nombre, img, poder, raza) {
        super(nombre, img, poder, raza)
    }

    //acá va el metodo para esta clase hija
    Transformacion() {
        //obtengo la variable poder mediante el get
        let poder = this.getPoder()
            /*
            modifico la variable poder y hago el cálculo para agregarlo a mi nuevo personaje
            este cálculo equivale a la variable poder multiplicada por 80%, para aumentar el poder según el tipo de raza
            */
        this.setPoder(parseInt(poder * 1.8));
    }
}

//clase Humano = clase hija de Personaje
class Humano extends Personaje {
    constructor(nombre, img, poder, raza) {
        super(nombre, img, poder, raza)
    }

    //acá va el metodo para esta clase hija
    Coraje() {
        //obtengo la variable poder mediante el get
        let poder = this.getPoder()
            /*
            modifico la variable poder y hago el cálculo para agregarlo a mi nuevo personaje
            este cálculo equivale a la variable poder multiplicada por 20%, para aumentar el poder según el tipo de raza
            */
        this.setPoder(parseInt(poder * 1.2));
    }
}

/*
Comprobando que la clase Humano funciona
console.log(new Humano('Krillin', '...', 1234, 'wewe'));
*/

//acá exporto ambas clases hijas
export { Saiyajin, Humano };