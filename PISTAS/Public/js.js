const elm1 = document.getElementById("obj1");
const elm2 = document.getElementById("obj2");
const elm3 = document.getElementById("obj3");
const btnPista = document.getElementById("getPista");
var pst = document.getElementById("pista");
var end = document.getElementById("fin");
var counter = 0;
var npista = document.getElementById("#pista");

var crono;

function reload() {
    location.reload(true);
}

//Crono
function tiempo() {
    crono = setInterval(function () {
        txt = document.getElementById("contador");
        counter++;
        txt.innerHTML = counter;
        if (counter >= 60) {
            //cuando llegue al minuto stop & alerta
            clearInterval(crono);
            end.innerHTML = "El juego ha terminado";
            disableAll();
        }
    }, 1000);
    elm1.style.display = "block";
    btnPista.disabled = true;
}

tiempo();

/*mostrar pistas 1*/
var x = 0;
function getPista() {
    var pistas1 = ["Mantiene el equilibrio del bote",
        "Corta las aguas al navegar",
        "Con estos empujamos en bote"];
    pst.innerHTML = pistas1[x];
    x = x + 1;
    if (x == 2) {
        btnPista.disabled = true;
    }
    btnPista.disabled = true;
    npista.innerHTML = x;
}
getPista();

function found1() {
    elm2.style.display = "block";
    btnPista.disabled = false;
    pst.innerHTML = "Muy Bien! es la Vela";
    elm1.style.display = "none";
}

function found2() {
    elm3.style.display = "block";
    btnPista.disabled = false;
    pst.innerHTML = "Muy Bien! es la Proa";
    elm2.style.display = "none";
}

function found3() {
    clearInterval(crono);
    pst.innerHTML = "Muy Bien! son los Remos";
    end.innerHTML = "El juego ha terminado";
}

function disableAll() {
    elm1.style.display = "none";
    elm2.style.display = "none";
    elm3.style.display = "none";
    btnPista.disabled = true;
}