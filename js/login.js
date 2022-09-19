function ingresarData() {
  var usuario = "miUsuario"
  var clave = "miClave"

  var inputUsuario = document.getElementById("usuario").value;
  var inputClave = document.getElementById("contrasenia").value;
  var errorClass = document.querySelector(".error");

  if (inputUsuario == usuario && inputClave == clave) {
    alert("¡Ingresó correctamente!");
    mostrarPerfil();
  } else {
    document.querySelector(".error").style.display = "block";
    errorClass.innerHTML = "<p>Datos incorrectos, volvé a intentar.</p>";
  }

}

function mostrarPerfil() {
  var caja = document.querySelector("#main").innerHTML =
  "<div id='caja'>" + "<h3>" + miPerfil[0] + "</h3>" + "<p>" + miPerfil[1] + "</p>" + "<img src=" + miPerfil[3] + "</img>" + "<h4>" + miPerfil[4] + "</h4>" + "<hr></hr>" + "<a>" + miPerfil[2] + "</a>" + "<br>"+ "<br>"+ "<button id='agregarInfo'> Agregar descripción </button>" + "<div id='info'</div>" 
  "</div>" 
  
  var boton = document.querySelector("button")
  boton.addEventListener("click", fnAgregarInfo)
}

var miPerfil = ["Guadalupe", 18, "truccologuadalupe@gmail.com", "'./img/Developer.png'", "Programadora"];

function fnAgregarInfo() {
  var boton = document.querySelector("button")
  var parrafo = prompt("¿Qué quiere agregar al perfil?")
  var info = document.getElementById("info")
  info.innerHTML = parrafo
  boton.style.display = "none"
}
