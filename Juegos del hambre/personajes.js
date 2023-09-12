var menu=document.getElementById("menu");
function mostrarMenu(){
    let activarMenu=document.getElementById("menu");
    activarMenu.classList.add("menuAbierto");
    let mostrarTextos=document.getElementById("textoMenu");
    mostrarTextos.classList.add("menuAbierto");
}
menu.addEventListener("mouseover", mostrarMenu, false);

function cerrarMenu(){
    let cerrarMenu=document.getElementById("menu");
    cerrarMenu.classList.remove("menuAbierto");
}
menu.addEventListener("mouseout", cerrarMenu);

var katniss={
    nombre:"Katniss Everdeen",
    datos:"Katniss Everdeen tiene 16 años. Su familia viven en el Distrito 12, que se encarga de la minería de carbón. Es el distrito más pobre y menos poblado en el ficticio país de Panem. Katniss vive junto a su hermana Primrose (Prim) Everdeen y su madre. Su padre murió en un accidente minero y ahora es ella la encargada de mantener a salvo a su familia. Para ello se va todos los días a cazar furtivamente con su mejor amigo, Gale Hawthorne. Katniss se diferencia por su valentía y rebeldía entre otras cosas. Después de que su hermana menor, Prim es elegida para participar en los 74º Juegos del hambre, Katniss toma su lugar voluntariamente en el puesto de tributo femenino del Distrito 12. Sus actos de rebeldía contra el Capitolio en la Arena, condujeron al pueblo de Panem a verla como la cara de la rebelión. Más tarde se convirtió en lo que se llamó <<el Sinsajo>> y encabezó la rebelión contra el Capitolio. El símbolo de Katniss, llamado 'El gesto de los tres dedos', es utilizado como muestra de agradecimiento, admiración y despedida. Con el avance de la trama, este gesto se convierte en un símbolo de rebelión contra los ricos opresores que viven en una capital protegida por un ejercito.",
    src:"Imagenes/Katniss.png",
    id:"ke",
    alt:"Katniss Everdeen"
};
var peeta={
    nombre:"Peeta Mellark",
    datos:"Peeta es el hijo del panadero del Distrito 12, por lo que está mejor alimentado que el resto de la gente del Distrito. Tiene dos hermanos de los que se desconoce los nombres, y a sus padres, quienes mueren en el bombardeo al Distrito durante el Vasallaje de los Veinticinco. Cuando Peeta es elegido para los juegos, Katniss recuerda cuando una vez le dio un pan que la salvo del hambre y le dieron esperanza para salir adelante en la pobreza, quemando a propósito unas barras de pan y dándoselas sin importarle las consecuencias, ya que al día siguiente Peeta y Katniss jamás habían hablado antes de los Juegos, aunque Peeta siempre intento hacerlo, por lo que no habían tenido ningún tipo de relación. Pero durante una entrevista, Peeta confiesa estar enamorado de Katniss, lo que hace que ella se enfade y lo golpee. Después, su mentor le hace entender que es mejor que el público crea esto para ganar audiencia. Así que, a ella no le queda más remedio que actuar el papel de chica enamorada y hacer de los Juegos más entretenidos, sucediendo la historia de amor entre los trágicos amantes del Distrito 12.",
    src:"Imagenes/peeta.png",
    id:"pm",
    alt:"Peeta Mellark"
};
var haymitch={
    nombre:"Haymitch Abernathy",
    datos:"Haymitch fue seleccionado en la Cosecha del segundo Vasallarje de los 25, el año 50º de los Juegos del Hambre junto a otro Tributo masculino y dos Tributos femeninos. Durante su entrevista con Caesar Flickerman, le preguntaron qué pensaba de que los Juegos fuesen a tener el doble de tributos; él dijo que no veía mucha diferencia, dado que serían igual de estúpidos, haciendo que el público se riese. Durante los Juegos, se hizo con un cuchillo de la Cornucopia. En un punto incierto Haymitch se enfrentó a tres tributos profesionales, matando a dos con el cuchillo; sin embargo, el tercero lo atrapó y estaba a punto de cortarle el cuello cuando fue disparado en la espalda con un dardo envenedado. Formó una alianza temporal con Maysilee Donner, el tributo del Distrito 12. Los dos fueron hasta el final de la arena, pensando que podría haber algo que podrían usar allí. Hacia el final de los Juegos, cuando solo quedaban unos pocos Tributos vivos, llegaron al final de la arena y no encontraron nada. Ella surgió volver atrás, pero Haymitch se negó a marcharse. Maysilee rompió la alianza, no queriendo tener que acabar matándolo ella misma. Escuchó a Maysilee gritar, acudiendo a su ayuda corriendo, pero la encontró moribunda a causa del ataque mortal de unas aves. Él permaneció a su lado mientras moría.",
    src:"Imagenes/Haymitch.png",
    id:"ha",
    alt:"Haymitch Abernathy"
};
var gale={
    nombre:"Gale Hawthorne",
    datos:"Gale tiene tres hermanos: Rory, de doce años, Vick, de 10 años, y la única chica, Posy, de cuatro años. Su madre se llama Hazelle Hawthorne. Intentando apoyar a su familia tras la muerte de su padre en la misma mina que mató al padre de Katniss, Gale tuvo que pedir muchas teselas. (Esta 42 veces en la cosecha) Tiene diecisiete años, posiblemente ya diecinueve en los capítulos de “En llamas” y “Sinsajo”. Suele cazar a menudo, la mayoría de veces con Katniss, siendo de ese modo como se conocieron. Cuando Katniss tenía doce años y él catorce, los padres de ambos murieron en un accidente minero, y pronto se convirtieron en compañeros de caza. Katniss dice que a los catorce, “Gale ya parecía un hombre”. Se menciona más tarde que medía un metro ochenta y algo. Al igual que mucha gente en la Veta, tiene la piel olivácea, pelo liso oscuro y ojos grises. Admite haberse enamorado de Katniss en “En Llamas”, y su relación crece en cada libro. Odia al Capitolio y tiene cicatrices de cuando fue azotado en “En Llamas” por un agente de la paz, tras haber sido pillado cazando ilegalmente.",
    src:"Imagenes/Gale.png",
    id:"gh",
    alt:"Gale Hawthorne"
};
var snow={
    nombre:"Corolianus Snow",
    datos:"Corolianus Snow fue un tiránico presidente de Panem. En su juventud, se le conocía por el apodo de Coryo, que originalmente le dio su prima Tigris. Antes de convertirse en presidente, asistió a la Academia del Capitolio, donde fue mentor de la tributo ganadora de los 10.os Juegos del Hambre, Lucy Gray Baird. Más tarde, tomó estudios militares avanzados en la universidad. También sirvió durante un breve periodo como un agente de la paz, demostrando tal aptitud que se presentó con éxito a un programa de élite para convertirse en oficial de los agentes de la paz, aunque finalmente no siguió este camino. Mientras asistía a la universidad y estudiaba estrategia militar avanzada, también ejerció como aprendiz de Vigilante, instituyendo rápidamente varias reformas nuevas en los Juegos, incluida la creación de la Aldea de los Vencedores.",
    src:"Imagenes/snow.png",
    id:"cs",
    alt:"Corolianus Snow"
};
var selectKatniss=document.getElementById("katniss");
function mostrarKatniss(){
    var imagen=document.getElementById("imagenPJ");
    var textos=document.getElementById("textoPJ");
    var nombre=document.getElementById("nombre");
    borrarElementos();
    cerrarSinopsis();
    var imageElement=document.createElement("img");
    imageElement.src=katniss.src;
    imageElement.alt=katniss.alt;
    imageElement.id=katniss.id;
    imagen.appendChild(imageElement);
    var textoKatniss=document.createElement("p");
    textoKatniss.id="textoKatniss";
    nombre.appendChild(textoKatniss);
    textoKatniss.innerText=katniss.nombre;
    textos.innerText=katniss.datos;
    imagen.classList.remove("divPJ");
    imagen.classList.add("divPJAbierto");
    textos.classList.add("divPJAbierto");
}
selectKatniss.addEventListener("click", mostrarKatniss);

var selectPeeta=document.getElementById("peeta");
function mostrarPeeta(){
    var imagen=document.getElementById("imagenPJ");
    var textos=document.getElementById("textoPJ");
    var nombre=document.getElementById("nombre");
    borrarElementos();
    cerrarSinopsis();
    var imageElement=document.createElement("img");
    imageElement.src=peeta.src;
    imageElement.alt=peeta.alt;
    imageElement.id=peeta.id;
    imagen.appendChild(imageElement);
    var textoPeeta=document.createElement("p");
    textoPeeta.id="textoPeeta";
    nombre.appendChild(textoPeeta);
    textoPeeta.innerText=peeta.nombre;
    textos.innerText=peeta.datos;
    imagen.classList.remove("divPJ");
    imagen.classList.add("divPJAbierto");
    textos.classList.add("divPJAbierto");
}
selectPeeta.addEventListener("click", mostrarPeeta);

var selectHaymitch=document.getElementById("haymitch");
function mostrarHaymitch(){
    var imagen=document.getElementById("imagenPJ");
    var textos=document.getElementById("textoPJ");
    var nombre=document.getElementById("nombre");
    borrarElementos();
    cerrarSinopsis();
    var imageElement=document.createElement("img");
    imageElement.src=haymitch.src;
    imageElement.alt=haymitch.alt;
    imageElement.id=haymitch.id;
    imagen.appendChild(imageElement);
    var textoHaymitch=document.createElement("p");
    textoHaymitch.id="textoHaymitch";
    nombre.appendChild(textoHaymitch);
    textoHaymitch.innerText=haymitch.nombre;
    textos.innerText=haymitch.datos;
    imagen.classList.remove("divPJ");
    imagen.classList.add("divPJAbierto");
    textos.classList.add("divPJAbierto");
}
selectHaymitch.addEventListener("click", mostrarHaymitch);

var selectGale=document.getElementById("gale");
function mostrarGale(){
    var imagen=document.getElementById("imagenPJ");
    var textos=document.getElementById("textoPJ");
    var nombre=document.getElementById("nombre");
    borrarElementos();
    cerrarSinopsis();
    var imageElement=document.createElement("img");
    imageElement.src=gale.src;
    imageElement.alt=gale.alt;
    imageElement.id=gale.id;
    imagen.appendChild(imageElement);
    var textoGale=document.createElement("p");
    textoGale.id="textoGale";
    nombre.appendChild(textoGale);
    textoGale.innerText=gale.nombre;
    textos.innerText=gale.datos;
    imagen.classList.remove("divPJ");
    imagen.classList.add("divPJAbierto");
    textos.classList.add("divPJAbierto");
}
selectGale.addEventListener("click", mostrarGale);

var selectSnow=document.getElementById("snow");
function mostrarSnow(){
    var imagen=document.getElementById("imagenPJ");
    var textos=document.getElementById("textoPJ");
    var nombre=document.getElementById("nombre");
    borrarElementos();
    cerrarSinopsis();
    var imageElement=document.createElement("img");
    imageElement.src=snow.src;
    imageElement.alt=snow.alt;
    imageElement.id=snow.id;
    imagen.appendChild(imageElement);
    var textoSnow=document.createElement("p");
    textoSnow.id="textoSnow";
    nombre.appendChild(textoSnow);
    textoSnow.innerText=snow.nombre;
    textos.innerText=snow.datos;
    imagen.classList.remove("divPJ");
    imagen.classList.add("divPJAbierto");
    textos.classList.add("divPJAbierto");
}
selectSnow.addEventListener("click", mostrarSnow);

function borrarElementos(){
    let elementok=document.getElementById("ke");
    elementok?elementok.remove():null;
    let elementop=document.getElementById("pm");
    elementop?elementop.remove():null;
    let elementoh=document.getElementById("ha");
    elementoh?elementoh.remove():null;
    let elementog=document.getElementById("gh");
    elementog?elementog.remove():null;
    let elementos=document.getElementById("cs");
    elementos?elementos.remove():null;
    let nombrek=document.getElementById("textoKatniss");
    nombrek?nombrek.remove():null;
    let nombrep=document.getElementById("textoPeeta");
    nombrep?nombrep.remove():null;
    let nombreh=document.getElementById("textoHaymitch");
    nombreh?nombreh.remove():null;
    let nombreg=document.getElementById("textoGale");
    nombreg?nombreg.remove():null;
    let nombres=document.getElementById("textoSnow");
    nombres?nombres.remove():null;
}
var sinopsisBtn=document.getElementById("sinopsisBtn");
function mostrarSinopsis(){
    var sinopsis=document.getElementById("sinopsis");
    var informacion=document.getElementById("informacion");
    if(informacion.id=="informacion"){
        informacion.classList.add("informacionCerrado");
    }
    if(sinopsis.classList=="mostrarSinopsis"){
        cerrarSinopsis();
    }else{
        sinopsis.classList.remove("sinopsis");
        sinopsis.classList.add("mostrarSinopsis");
    }
}
sinopsisBtn.addEventListener("click", mostrarSinopsis);

function cerrarSinopsis(){
    sinopsis.classList.remove("mostrarSinopsis");
    sinopsis.classList.add("sinopsis");
    var informacion=document.getElementById("informacion");
    if(informacion.classList=="informacionCerrado"){
        informacion.classList.remove("informacionCerrado");
    }
}