var user = "papel";
var pc = "piedra";

if (user === pc) {
  console.log("Empate");
} else if (user === "piedra") {
  if (pc === "papel") {
    console.log("Perdiste");
  } else {
    console.log("Ganaste");
  }
} else if (user === "papel") {
  if (pc === "tijera") {
    console.log("Perdiste");
  } else {
    console.log("Ganaste");
  }
} else if (user === "tijera") {
  if (pc === "piedra") {
    console.log("Perdiste");
  } else {
    console.log("Ganaste");
  }
}
var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera ");
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

// let numero = 'a';
//con true los casos van a pasar
switch (true) {
  case user === machine:
    console.log("es un empate");
    break;
  case machine === "piedra" && user === "papel":
    console.log("Ganaste");
    break;
  case machine === "papel" && user === "tijera":
    console.log("Ganaste");
    break;
  case machine === "tijera" && user === "piedra":
    console.log("Ganaste");
    break;
  default:
    console.log("¡Perdiste!");
}
