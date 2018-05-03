var canvas;
var Pacman;
var interval_juego;
var nfruta = 4;

var coordenadas = [
[20, 10, 425, 5],[225, 10, 20, 85],
//lateral izquierdo
[20, 10, 5, 180],[1, 190, 94, 65],[1, 295, 94, 65],[25, 455, 25, 15],[20, 366, 5, 200],
//lateral derecho
[445, 10, 5, 180],[370, 190, 130, 65],[370, 295, 130, 70],[420, 455, 27, 15],[445, 366, 5, 200],
//suelo
[20, 563, 425, 5],
//medio
[225, 140, 20, 61],[225, 360, 20, 55],[225, 465, 20, 55],
//centro
[185, 245, 30, 15],[255, 245, 30, 15],[185, 295, 100, 15],[185, 260, 5, 35],[280, 260, 5, 35],
//primera filas
[65, 58, 32, 36],[135, 58, 54, 36],[280, 58, 50, 36],[371, 58, 32, 36],
//segunda filas
[65, 140, 32, 12],[185, 140, 40, 12],[245, 140, 40, 12],[371, 140, 34, 12],
//tercera filas
[145, 190, 45, 12],[280, 190, 47, 12],
//cuarto filas
[183, 350, 103, 12],
//5-filas
[65, 405, 35, 12],[135, 405, 55, 12],[278, 405, 55, 12],[371, 405, 32, 12],
//6-filas
[183, 455, 103, 12],
//7-filas
[65, 508, 127, 12],[278, 508, 127, 12],
//1-columnas
[88, 417, 12, 50],[371, 417, 12, 50],
//2-columnas
[135, 140, 12, 115],[135, 295, 12, 65],[135, 455, 12, 53],
//3daa-columnas
[322, 140, 12, 115],[322, 295, 12, 65],[322, 455, 12, 53],
];

var coordenadas_puntos = [
//2ªcolumna
[115, 69], [115, 95], [115, 121], [115, 147], [115, 173], [115, 197], [115, 224], [115, 252], [115, 279],
[115, 305], [115, 331], [115, 357], [115, 383], [115, 409], [115, 435], [115, 461], [115, 487],
[115, 541],
//1ªfila
[46, 42], [69, 42], [92, 42], [115, 42], [138, 42], [161, 42], [184, 42], [207, 42],
[263, 42], [287, 42], [310, 42], [332, 42], [354, 42], [377, 42], [399, 42], [421, 42],
//2ªfila
[115, 69], [207, 69], [263, 69], [354, 69],
//3ªfila
[46, 95], [115, 95], [207, 95], [263, 95], [354, 95], [421, 95],
//4ªfila
[46, 121], [69, 121], [92, 121], [138, 121], [161, 121], [184, 121], [207, 121], [235, 121],
[263, 121], [287, 121], [310, 121], [332, 121], [354, 121], [377, 121], [399, 121], [421, 121],
//5ªfila
[46, 147], [161, 147], [310, 147], [354, 147], [421, 147],
//6ªfila
[46, 173], [69, 173], [92, 173], [115, 173], [161, 173], [184, 173], [207, 173],
[263, 173], [287, 173], [310, 173], [354, 173], [377, 173], [399, 173], [421, 173],
//7ªfila
[115, 197], [207, 197], [263, 197], [354, 197],
//8ªfila
[115, 224], [161, 224], [184, 224], [207, 224], [235, 224], [263, 224],
[287, 224], [310, 224], [354, 224],
//9ªfila
[115, 252], [161, 252], [310, 252], [354, 252],
//10ªfila
[138, 279], [161, 279], [310, 279], [332, 279], [354, 279],
//11ªfila
[161, 305], [310, 305], [354, 305],
//12ªfila
[161, 331], [184, 331], [207, 331], [235, 331], [263, 331], [287, 331],
[310, 331], [354, 331],
//13ªfila
[161, 357], [310, 357], [354, 357],
//14ªfila
[46, 383], [69, 383], [92, 383], [138, 383], [161, 383], [184, 383], [207, 383],
[263, 383], [287, 383], [310, 383], [332, 383], [354, 383], [377, 383], [399, 383], [421, 383],
//15ªfila
[46, 409], [207, 409], [263, 409], [354, 409], [421, 409],
//16ªfila
[69, 435], [138, 435], [161, 435], [184, 435], [207, 435], [235, 435],
[263, 435], [287, 435], [310, 435], [332, 435], [354, 435], [399, 435],
//17ªfila
[69, 461], [161, 461], [310, 461], [354, 461], [399, 461],
//18ªfila
[46, 487], [69, 487], [92, 487], [161, 487], [184, 487], [207, 487], [263, 487],
[287, 487], [310, 487], [354, 487], [377, 487], [399, 487], [421, 487],
//19ªfila
[46, 514], [207, 514], [263, 514], [421, 514],
// 20ªfila
[46, 541], [69, 541], [92, 541], [138, 541], [161, 541], [184, 541], [207, 541], [235, 541],
[263, 541], [287, 541], [310, 541], [332, 541], [354, 541], [377, 541], [399, 541], [421, 541],
];

var coord_puntos_gord = [[46, 69], [421, 69], [46, 435], [421, 435],]

function tiempo(){
  segundos--;
  document.getElementById("temporizador").innerHTML = "Tiempo: " + segundos;
}

function iniciar_tiempo(){
	segundos = 200;
  interval1 = setInterval(tiempo,1000);
}

function Pared(x, y, width, height, color){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.draw = function(ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.chocar = function(objeto){
    var izquierda_pared = this.x;
    var derecha_pared = this.x + (this.width);
    var arriba_pared = this.y;
    var abajo_pared = this.y + (this.height);

    var izquierda_objeto = objeto.x;
    var derecha_objeto = objeto.x + (objeto.width);
    var arriba_objeto = objeto.y;
    var abajo_objeto = objeto.y + (objeto.height);

    var chocar = false;
    //si no choca
    if((derecha_pared < izquierda_objeto) || (izquierda_pared > derecha_objeto)
    || (arriba_pared > abajo_objeto) || (abajo_pared < arriba_objeto)) {
      chocar = false;
    }else{
      chocar = true;
    }
    return chocar;
  }
}

function Personaje(ctx, x, y, width, height, src){
  this.x = x;
  this.y = y;
  this.image = new Image();
  this.image.src = src;
  this.width = width;
  this.height = height;
  this.radious = this.width/2;
  this.angulo = 0;
  this.velocidadX = 0;
  this.velocidadY = 0;

  var that = this;
  this.update = function() {
    that.x += that.velocidadX;
    that.y += that.velocidadY;
  }
  this.draw = function(ctx){

    ctx.save();
    ctx.translate(that.x + width/2, that.y + height/2);
    ctx.rotate(that.angulo);
    ctx.translate(- (that.x + width/2), - (that.y + height/2));
    ctx.drawImage(that.image, that.x , that.y, width, height);
    ctx.restore();
  }
  this.chocarpuntos = function(objeto){
    var chocar = false;

    var x1 = that.x + that.radious;
    var y1 = that.y + that.radious;
    var distancia = Math.sqrt(((x1 - objeto.x) ** 2) + ((y1 - objeto.y) ** 2));

    if(distancia < (that.radious + objeto.radious)){
      chocar = true;
    }
    return chocar
  }
  this.chocarfantasmas = function(objeto){
    var izquierda_pacman = this.x;
    var derecha_pacman = this.x + (this.width);
    var arriba_pacman = this.y;
    var abajo_pacman = this.y + (this.height);

    var izquierda_objeto = objeto.x;
    var derecha_objeto = objeto.x + (objeto.width);
    var arriba_objeto = objeto.y;
    var abajo_objeto = objeto.y + (objeto.height);

    var chocar = false;
    //si no choca
    if((derecha_pacman < izquierda_objeto) || (izquierda_pacman > derecha_objeto)
    || (arriba_pacman > abajo_objeto) || (abajo_pacman < arriba_objeto)) {
      chocar = false;
    }else{
      chocar = true;
    }
    return chocar;
  }
  this.chocarX = function(){
    //para que nunca atraviesen las paredes
    that.x = that.x - that.velocidadX;
  }
  this.chocarY = function(){
    that.y = that.y - that.velocidadY;
  }
  this.changesrc = function(nueva_src){
    that.image.src = nueva_src;
  }
  this.limite = function(){
    if (that.x - that.radious > canvas.width) {
      that.x = 0;
    }
    else if (that.x + that.radious < 0) {
      that.x = canvas.width;
    }

    if (that.y - that.radious > canvas.height) {
      that.y = 0;
    }
    else if (that.y + that.radious < 0) {
      that.y = canvas.height;
    }
  }
}

function Circle(x, y, radious, color) {
  this.x = x;
  this.y = y;
  this.radious = radious;
  this.color = color;
  this.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radious, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function come_pacman(puntos, fruta, jugador){
  var musica2 = document.getElementById("comer_fruta");

  for(var i=0; i<puntos.length; i++){
    if(Pacman.chocarpuntos(puntos[i])){
        if(puntos[i].grande == true){
          sessionStorage.setItem(jugador, Number(sessionStorage.getItem(jugador)) + 3);
        }else{
          sessionStorage.setItem(jugador, Number(sessionStorage.getItem(jugador)) + 1);
        }
      puntos.splice(i, 1);
      document.getElementById("puntuacion").innerHTML = "PUNTUACIÓN: " + sessionStorage.getItem(jugador);
    }
  }
  for(var i=0; i<fruta.length; i++){
    if(Pacman.chocarpuntos(fruta[i])){
      sessionStorage.setItem(jugador, Number(sessionStorage.getItem(jugador)) + 4);
      fruta.splice(i, 1);
      musica2.play();
    }
    if(fruta.length == 0){
      nfruta--;
    }
  }
}

function puntuacion(jugador){
  record = localStorage.getItem(jugador);
  if(record == null){
    localStorage.setItem(jugador, "0");
    document.getElementById("record").innerHTML = "Record de " + jugador + ": " + localStorage.getItem(jugador);
  }else{
    document.getElementById("record").innerHTML = "Record de " + jugador + ": " + localStorage.getItem(jugador);
  }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var src = document.getElementById(data).src;
    Pacman.changesrc(src);
}

function crear_video(video){
    var x = document.createElement("VIDEO");
    var style = "position: absolute; top: -10%; z-index: 10;";

    if (x.canPlayType("video/mp4")) {
        x.setAttribute("src", video + ".mp4");
    } else {
        x.setAttribute("src", video + ".ogg");
    }

    x.setAttribute("width", "1280");
    x.setAttribute("height", "720");
    x.setAttribute("controls", "controls");
    x.setAttribute("autoplay", "autoplay");
    x.setAttribute("style", style);

    document.body.appendChild(x);
}

function pausar(elemt){
  var src = elemt.getAttribute("src");
  var musica1 = document.getElementById("comer");
  musica1.muted = true;
  if(src == "pausar.png"){
    document.getElementById('boton_pausar').src = "continuar.png";
    clearInterval(interval_juego);
    clearInterval(interval1);
    musica2.muted = true;
  }else{
    document.getElementById('boton_pausar').src = "pausar.png";
    clearInterval(interval_juego);
    interval_juego = setInterval(juego, 20);
    interval1 = setInterval(tiempo,1000);
  }
}

function mantener(event) {
  switch(event.key) {
      case "ArrowLeft":
        Pacman.velocidadX = -1.5;
        Pacman.velocidadY = 0;
        Pacman.angulo = 0;
        break;
      case "ArrowRight":
        Pacman.velocidadX = 1.5;
        Pacman.velocidadY = 0;
        Pacman.angulo = Math.PI;
        break;
      case "ArrowUp":
        Pacman.velocidadX = 0;
        Pacman.velocidadY = -1.5;
        Pacman.angulo = Math.PI/2;
        break;
      case "ArrowDown":
        Pacman.velocidadX = 0;
        Pacman.velocidadY = 1.5;
        Pacman.angulo = 3*Math.PI/2;
        break;
      default:
        console.log("Key not handled");
  }
}

function render(canvas, paredes, puntos, fruta, fantasmas, jugador, ctx){
  interval_juego = setInterval(juego, 20);
  function juego(){
    var texto;
    var video;
    var musica1 = document.getElementById("comer");


    if((Pacman.velocidadX == 0 && Pacman.velocidadY == 0) || segundos <= 0){

      musica1.muted = true;
    }else{
      musica1.muted = false;
    }
    if(puntos.length == 0 || segundos == 0){
      if(localStorage.getItem(jugador) == "0"){
        localStorage.setItem(jugador, sessionStorage.getItem(jugador));
      }else{
        if(Number(sessionStorage.getItem(jugador)) > Number(localStorage.getItem(jugador))){
          localStorage.setItem(jugador, sessionStorage.getItem(jugador));
        }
      }
      if(segundos == 0){
        video = "perder";
        texto = "SE ACABÓ EL TIEMPO, TU PUNTUACIÓN ES: ";
        clearInterval(interval_juego);
        clearInterval(interval1);
        crear_video(video);
        alert(texto + sessionStorage.getItem(jugador));

      }else{
        musica1.muted = true;
        video = "ganar";
        texto = "HAS GANADO!!!, TU PUNTUACIÓN ES: ";
        sessionStorage.setItem(jugador, Number(sessionStorage.getItem(jugador)) + segundos);
        clearInterval(interval_juego);
        clearInterval(interval1);
        crear_video(video);
        alert(texto + sessionStorage.getItem(jugador));
      }

    }

    document.getElementById("example").style.background = "url('paredes.jpg')";


  	ctx.clearRect(0, 0, canvas.width, canvas.height);

    Pacman.update();
    Pacman.draw(ctx);
    Pacman.limite();

    for(var i = 0; i < fantasmas.length; i ++){
      if(Pacman.chocarfantasmas(fantasmas[i])){
        musica1.muted = true;
        texto = "TE PILLARON!!!, TU PUNTUACIÓN ES: ";
        video = "perder";
        clearInterval(interval_juego);
        clearInterval(interval1);
        crear_video(video);
        alert(texto + sessionStorage.getItem(jugador));
      }
    }

    come_pacman(puntos, fruta, jugador);

    for (i = 0; i < paredes.length; i ++){
      if (paredes[i].chocar(Pacman)){
        if(Pacman.velocidadX != 0){
          Pacman.chocarX();
          Pacman.velocidadX = 0;
        }
        if(Pacman.velocidadY != 0){
          Pacman.chocarY();
          Pacman.velocidadY = 0;
        }
      }
      for(var j = 0; j < fantasmas.length; j ++){
        if (paredes[i].chocar(fantasmas[j])){
          if(fantasmas[j].velocidadY <= 0){
            fantasmas[j].velocidadY = 1.5
          }else{
            fantasmas[j].velocidadY = -1.5
          }
        }
      }
      //paredes[i].draw(ctx);
    }

    for(var i = 0; i < puntos.length; i ++){
      puntos[i].draw(ctx);
    }
    for(var i = 0; i < fantasmas.length; i ++){
      fantasmas[i].update(ctx);
      fantasmas[i].draw(ctx);
    }
    for(var i = 0; i < fruta.length; i ++){
      fruta[i].draw(ctx);
    }
  }
}

function main() {

  var paredes = [];
  var fantasmas = [];
  var puntos = [];
  var fruta = [];

  clearInterval(interval_juego);

  var jugador = prompt("Introducce su nombre:");
  puntuacion(jugador);
  iniciar_tiempo();

  canvas = document.getElementById('example');
  if (!canvas) {
		console.log('Failed to retrieve the <canvas> element');
		return false;
	}
  ctx = canvas.getContext('2d');

  document.addEventListener('keydown', mantener, false);

  for(var i = 0; i < coordenadas.length; i ++){
    var coord = coordenadas[i];
    paredes.push(new Pared(coord[0],coord[1],coord[2],coord[3],"red"));
  }
  for(var i = 0; i < coordenadas_puntos.length; i ++){
    var coord_puntos = coordenadas_puntos[i];
    puntos.push(new Circle(coord_puntos[0], coord_puntos[1], 3.0, "white"));
  }
  for(var i = 0; i < coord_puntos_gord.length; i ++){
    var coord_puntos_g = coord_puntos_gord[i];
    puntos.push(new Circle(coord_puntos_g[0], coord_puntos_g[1], 6.0, "white"));
  }

  Pacman = new Personaje(ctx, 226, 270, 22, 22, "comecocosAmarillo.png");
  fantasmas.push(new Personaje(ctx, 340, 430, 24, 24, "fantasma1.png"));
  fantasmas.push(new Personaje(ctx, 102, 19, 24, 24, "fantasma2.png"));
  fruta.push(new Personaje(ctx, 226, 333, 16, 16, "cereza.png"));

  function otrafruta(){
    var tipofruta;
    if(nfruta > 0 && fruta.length == 0){
      n = Math.floor(Math.random() * (2 - 0)) + 0;
      if(n == 0){
        tipofruta = "fresa.jpeg";
      }else if(n == 1){
        tipofruta = "platano.png";
      }else if(n == 2){
        tipofruta = "manzana.jpg";
      }
      fruta.push(new Personaje(ctx, 226, 333, 16, 16, tipofruta));
    }
  }
  interval2 = setInterval(otrafruta,10000);
  fantasmas[0].velocidadY = 1.5;
  fantasmas[1].velocidadY = 1.5;

  sessionStorage.setItem(jugador, "0");

  render(canvas, paredes, puntos, fruta, fantasmas, jugador, ctx);
}
