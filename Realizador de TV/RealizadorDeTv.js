var interval1;

function reloj(video) {
    var tiempo = video.currentTime;
    var horas = Math.floor(tiempo/3600)
    var minutos = Math.floor(tiempo/60);
    var segundos = Math.floor(tiempo) % 60;
    if(minutos < 10){
      minutos = '0' + minutos;
    }
    if(segundos < 10){
      segundos = '0' + segundos;
    }
    var reloj = horas + " : " + minutos +  " : " + segundos;
    document.getElementById("reloj").innerHTML = reloj;
}

function silenciar_audio(elemt){
  var camara = document.getElementById(elemt.id);
  camara.muted = true;
}

function activa_audio(elemt){
  var camara = document.getElementById(elemt.id);
  camara.muted = false;
}

function bucle(){
  var inicio = document.getElementById("inicio").value;
  var fin = document.getElementById("fin").value;
  var numero_veces = prompt("Cuantas veces?", "0");
  var video_principal = document.getElementById("video_principal");

  video_principal.currentTime = inicio;
  video_principal.play();

  var numero_hecho = 0;
  var interval2 = setInterval(function(){
    if(video_principal.currentTime >= fin){
      video_principal.currentTime = inicio;
      numero_hecho++;
    }
    if(numero_hecho >= numero_veces){
      clearInterval(interval2);
    }
  }, 1000)
}

function cambiar_video(button) {
  var video_principal = document.getElementById("video_principal");
  var inicio =  document.getElementById("inicio");
  var fin =  document.getElementById("fin");
  var inicio_mostrar = document.getElementById("inicio_mostrar");
  var fin_mostrar = document.getElementById("fin_mostrar");

  var camaras = [];
  for(var i=1; i<5; i++){
    camaras[i] = document.getElementById("camara" + i);
    camaras[i].style = "";
  }
  var camara_elegida = document.getElementById("camara" + button.id);
  camara_elegida.style = "border: 4px solid red";

  video_principal.src = "prueba" + button.id + ".mp4";
  video_principal.currentTime = camara_elegida.currentTime;
  clearInterval(interval1);
  interval1 = setInterval(reloj, 1000, video_principal);
  video_principal.play();

  function valores_marcador(){
    inicio.max = camara_elegida.duration;
    fin.max = camara_elegida.duration;

    inicio_mostrar.innerHTML = inicio.value;
    fin_mostrar.innerHTML = fin.value;
  }


  inicio.addEventListener("click", function(){
    valores_marcador();
    }
    ,false);

  fin.addEventListener("click", function(){
    valores_marcador();
    }
    ,false);
}
