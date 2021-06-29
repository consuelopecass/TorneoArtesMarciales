import Personajes from "./Consulta.js";

document.getElementById("buttonImages").addEventListener("click", async() => {
    //esta es la promesa para obtener a los personajes desde el metodo getData en Consulta
    const { personajes } = await Personajes.getData();
    console.log(personajes);
    //despues buscamos sacar un elemento en particular del array que nos entrega el metodo getData, ya que trae el JSON completo
    const pj = document.getElementById("nombre").value;
    //pj devuelve el valor del selector creado en el HTML con el nombre de los personajes
    const imagenesPjTemplate = personajes
        //imagenesPjTemplate permite mapear los datos del personaje seleccionado en el HTML
        .find((p) => p.name == pj)
        .imagenes.map((i) => `<img width="200" src="/assets/imgs/${pj}/${i}" />`)
        .join(" ");

    /*
    acá inyecto en el HTML el template que cree arriba, con la etiqueta img y todo lo demás.
    servirá para reescrbir en el dom con la inserción inner, iterando con la clase personajes, insertando el template
    */
    document.getElementsByClassName("personajes")[0].innerHTML = imagenesPjTemplate;

    //acá se incluye el elemento click a todas las imagenes dentro del div personajes
    document.querySelectorAll(".personajes img").forEach((i) => {
        i.addEventListener("click", (event) => {
            $("#imagenModal").modal("toggle");
            //acá para obtener en src de cada selección vamos a sobreescirbir el backgroundImage del div preview que se ve en registrar parcipante, en el HTML
            const imagenSrc = event.target.src;
            document.getElementById("preview").style.backgroundImage = `url(${imagenSrc})`;
        });
    });
});