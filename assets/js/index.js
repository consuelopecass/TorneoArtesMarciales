import { Saiyajin, Humano } from "./clases/Razas.js";

//esta variable almancenará a los parcipantes en un arreglo
let participantes = []

//acá estoy dando la función click al boton registrar
document.getElementById("btnRegistrar").addEventListener("click", () => {
    //acá entro al elemento nombre del formulario mediante el getElement
    let nombre = document.getElementById("nombre");
    let raza = document.getElementById("raza");
    let previewElement = document.getElementById("preview");
    let imagenSrcBg = previewElement.style.backgroundImage;
    //saca la direccion del stirng comprleot del background image
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);
    let ki = document.getElementById("poderPelea");

    /*
    Todas las variables antes creadas son para los datos del formulario 
    */

    let nuevoParticipante;

    if (raza.value == "Saiyajin") {
        nuevoParticipante = new Saiyajin(nombre.value, imgSrc, ki.value, raza.value);
    } else if (raza.value == 'Humano') {
        nuevoParticipante = new Humano(nombre.value, imgSrc, ki.value, raza.value);
    }

    if (raza.value && nombre.value && ki.value && imagenSrcBg) {
        /*
        Acá agregamos el nuevo participante al arreglo participantes que creamos más arriba
        Acá se crea la variable nuevo participante para crear el if que genere la respuesta
        según el tipo de raza que se ingresa por el formulario
        */
        participantes.push(nuevoParticipante);

        nombre.selectedIndex = 0;
        raza.selectedIndex = 0;
        previewElement.style.backgroundImage = "none";
        imagenSrcBg = previewElement.style.backgroundColor = "#f0f0f0";
        ki.value = "";
        //Acá las 5 lineas más arriba sirven para resetear el formulario
        reloadTable();
        //acá llamamos a la funcion creada más abajo, fuera del formulario, para que cada vez que registremos
        //un participante, se recargue para agregar a otro participante
    } else {
        alert("Faltan datos por llenar");
    }

    /*
    Acá probando que funcione el array
    console.log(participantes);
     */

});

//Esta función es para manipular la tabla Participantes dentro del DOM e inyectar los personajes
const reloadTable = () => {
    const participantesTemplate = document.getElementById("Participantes");
    participantesTemplate.innerHTML = "";
    participantes.forEach((p, i) => {
        //p = participante, i = indice
        participantesTemplate.innerHTML += `
        <div class="px-3 pb-2 participante" data-fighter="${p.getNombre()}">
        <div class="card" max-">
            <img src="${p.getImg()}" class="card-img-top" >
            <div class="card-body" style="max-height:400px;width:auto;height:auto;">
                <h4 class="card-title">${p.getNombre()}</h4>
                <hr class="w-50 mx-auto">
                <h6 class="card-text">Raza: ${p.getRaza()}</h6>
                <h6 class="card-text">Poder de pelea:<span class="text-danger">${p.getPoder()}</span></h6>
                <button class="btn btn-outline-warning" onclick="activarHabiblidad('${i}')">Habilidad Especial</button>
            </div>
        </div>
    </div>
    `;
    })
};

//Este método es para llamar al onclick 'activarHabiblidad' que está en el botón del formulairo
//Este es el boton HABILIDAD ESPECIAL
window.activarHabiblidad = (i) => {
    const participante = participantes[i]
    if (participante.getRaza() == "Saiyajin") {
        participante.Transformacion();
    } else if (participante.getRaza() == "Humano") {
        participante.Coraje();
    }
    reloadTable();
}

//Este es el botón QUIEN ES EL MÁS FUERTE
document.getElementById("btnMasFuerte").addEventListener("click", () => {
    const masFuerte = participantes.sort((a, b) => b.getPoder() - a.getPoder())[0];
    const nombre = masFuerte.getNombre();

    document.querySelector(`[data-fighter='${nombre}'] div`).style.boxShadow = "0px 0px 5px 1px yellow";
});