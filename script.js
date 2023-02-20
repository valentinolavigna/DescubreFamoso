let famosos = ["ironman.jpg","chandler.jpg","thor.jpg","chrisevanss.jpg","garethbale.jpg","tomholland.jpg"];
let correcta= [0,2,2,0,1,1];
let opciones = [];

opciones.push(["Robert Downey Junior","Leonardo DiCaprio","Mark Wahlberg"]);
opciones.push(["Matt LeBlanc","David Schwimmer","Matthew Perry"]);
opciones.push(["Luke Hemsworth","Liam Hemsworth","Chris Hemsworth"]);
opciones.push(["Chris Evans","Jeremy Renner","Mark Ruffalo"]);
opciones.push(["Robert Lewandowski","Gareth Bale","Jordi Alba"]);
opciones.push(["Dylan O'brien","Tom Holland","Paul Wesley"]);

let posicionActual=0;
let cantidadAcertadas=0;

function comenzarJuego(){
    posicionActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarFamoso();

}

function cargarFamoso(){
    if(famosos.length <= posicionActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgFamoso").src = "img/" + famosos[posicionActual];
        document.getElementById("n0").innerHTML = opciones[posicionActual][0];
        document.getElementById("n1").innerHTML = opciones[posicionActual][1];
        document.getElementById("n2").innerHTML = opciones[posicionActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posicionActual]){
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posicionActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posicionActual]).className = "letra letraAcertada";
    }
    posicionActual++;
    setTimeout(cargarFamoso,1000);
}
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = famosos.length - cantidadAcertadas;
}

function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}