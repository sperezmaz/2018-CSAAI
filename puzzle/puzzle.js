var piezas = ["cuad1","cuad2","cuad3","cuad4","cuad5","cuad6","cuad7", "cuad8","cuad9"];
var actual = [];
var actual_recortado = [];
var correcto = [];

var interval1;
var segundos, minutos, horas, segtot;
var reloj, contadorseg;
var user;

var carrousel;

function bienvenida(imag){
	for(var i=0; i<piezas.length; i++){
		document.getElementById(piezas[i]).src = imag + "/" + piezas[i] + ".jpg";
	}
	piezas.splice(6, 1);
}

function tiempo()
{
	if(segundos == 60){
		segundos = 0;
		minutos++;
		if(minutos == 60){
			minutos = 0;
			horas++;
		}
	}
	segundos++;
	segtot++
	reloj = horas + ":" + minutos + ":" + segundos;
	contadorseg = segtot + "";

	document.getElementById("temporizador").innerHTML = "Tiempo: " + reloj;
}

function iniciar_tiempo()
{
	segtot = 0;
	segundos = 0;
  minutos = 0;
	horas = 0;

  interval1 = setInterval(tiempo,1000);
}

function iniciar_puzzle(imag_clickada){
  var piezasdesorden = piezas.slice();
  var piezasdesorden = piezasdesorden.sort(
		function(a, b){
			return 0.5 - Math.random()
		});
  for(var i=0; i<piezasdesorden.length; i++){
    document.getElementById(piezas[i]).src = imag_clickada + "/" + piezasdesorden[i] + ".jpg";
  }
	document.getElementById("cuad7").src = imag_clickada + "/vacio.jpg"
}

function cambiar(imag){
  var src_pieza = imag.getAttribute("src");
  imag_clickada = src_pieza.split("/");
  clearInterval(interval1);
  iniciar_tiempo();
  iniciar_puzzle(imag_clickada[0]);
}

function actual_puzzle(){
  for(var i=0; i<9;i++){
    actual[i] = document.getElementById("cuad" + (i+1)).getAttribute("src");
  }
}

function intercamb_pieza(e) {
  actual_puzzle();
  var src_pieza = e.getAttribute("src");
	var img_elegida = src_pieza.split("/");
  var cuadrante = actual.indexOf(src_pieza);
	var vacia = img_elegida[0] + "/vacio.jpg";
  var cuad_blanca = actual.indexOf(vacia);

  if(src_pieza  !== vacia){
    if(((actual[cuadrante-1] == vacia) && (cuadrante!=3) && (cuadrante!=6)) ||
			 ((actual[cuadrante+1] == vacia) && (cuadrante!=2) && (cuadrante!=5)) ||
			 (actual[cuadrante-3] == vacia) ||
       (actual[cuadrante+3] == vacia)){

        actual[cuad_blanca] = src_pieza;
        actual[cuadrante] = vacia;
    }else{
			alert("No permitido!!!");
    }
  }

	for(var i=0; i<9;i++){
		document.getElementById("cuad" + (i+1)).src = actual[i];
	}
	puzzle_correcto()
}

function carrousel(){
  var n = 4;
  carrousel = setInterval(
  function(){
    document.getElementById("carrousel1").src = "imagen" + (n) + "/imagen" + (n) + ".jpg";
		document.getElementById("carrousel2").src = "imagen" + (n+1) + "/imagen" + (n+1) + ".jpg";
		document.getElementById("carrousel3").src = "imagen" + (n+2) + "/imagen" + (n+2) + ".jpg";
		n++;
		if(n == 8){
			n = 0;
		}
  },2500);
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
	user = prompt("INTRODUCCE TU NOMBRE:","")
	if(getCookie(user) == ""){
		alert("Bienvenido " + user + ". SELECCIONA UN PUZZLE");
		setCookie(user, "0", 1);
	}else{
		alert("Bienvenido de nuevo " + user+ ". SELECCIONA UN PUZZLE");
	}
	console.log(document.cookie);
	console.log(user);
}

function puzzle_correcto(){
  for(var i=0; i<9;i++){
		actual_recortado[i] = document.getElementById("cuad" + (i+1)).getAttribute("src").substring(8);
		correcto[i] =  "cuad" + (i+1) + ".jpg";
    }
	correcto[6] = "vacio.jpg";
	console.log("actual", actual_recortado);
	console.log("correcto", correcto);
	if(actual_recortado.toString() === correcto.toString()){
		if(contadorseg >= parseInt(getCookie(user)) && getCookie(user) != "0"){
			alert("Ganaste!!!, aunque no mejoraste tiempo :| -- Tiempo total: " + reloj);
		}else if (getCookie(user) == "0") {
			alert("Ganaste!!! -- Tiempo total: " + reloj);
			setCookie(user, contadorseg, 1);
		}else{
			alert("Felicidades, tienes nuevo record!!! -- Tiempo total: " + reloj);
			setCookie(user, contadorseg, 1);
		}
		alert("SELECCIONA OTRO PUZZLE");
		clearInterval(interval1);
	}
}

function main(){
	checkCookie();
  carrousel();
	bienvenida("imag_bienve");
}
