//FORMULARIO 1

function guardarDatos() {

  const usuario = {
    nombre: "Carlos",
    apellido: "Lopez",
    correo : "carlos_1992_@hotmail.com"
  };

  const userRegistrado = {
  name : document.getElementById('name').value,
  firstName : document.getElementById('firstName').value,
  email : document.getElementById('email').value
  }

  if (userRegistrado.name === usuario.nombre && userRegistrado.firstName === usuario.apellido && userRegistrado.email === usuario.correo)
  return document.getElementById('textForm').innerHTML = `Tu nombre es ${userRegistrado.name} ${userRegistrado.firstName} con correo electronico: ${userRegistrado.email} y si te encuentras registrado :D`;
  return userRegistrado.name === "" ? document.getElementById('textForm').innerHTML = "No estas registrado, prueba poniendo nombre: Carlos, Apellido: Lopez y Correo: carlos_1992_@hotmail.com y funcionara :)" : document.getElementById('textForm').innerHTML = "Usuario Erroneo";
}

//FORMULARIO 2

//const texto = document.getElementById('cadenaTexto').value
//window.alert(texto)

function metodosString () {

  const texto = document.getElementById('cadenaTexto').value

  const metodoLength = texto.length
//  const resultadoLength = metodoLength
//  window.alert(resultadoLength)
//  document.getElementById("metodoLength").appendChild(metodoLength);


  const node = document.createElement("span");
  const textnode = document.createTextNode(metodoLength);
  node.appendChild(textnode);
  document.getElementById("metodoLength").appendChild(node);

  document.getElementById("metodoLength").appendChild(node);

}

/* CHEMA!!!
const addResult = (element, result) => {
  const node = document.createElement("span");
  const textnode = document.createTextNode(result);
  node.appendChild(textnode);
  document.getElementById(element).appendChild(node);
}




//

contar elemtnso de un array:

const size = [].lenght

addResult("arraySize", size)
addResult("arraySize", size)
*/