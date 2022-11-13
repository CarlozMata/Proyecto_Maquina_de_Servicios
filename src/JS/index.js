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

//  let text = "Tú nombre es: " + name + " " + firstName + " y el correo es " + email;
//  document.getElementById('textForm').innerHTML = text;
/*
  if (userRegistrado.name === usuario.nombre) {
    document.getElementById('textForm').innerHTML = "Tu eres Carlos Mata";
  } else {
    document.getElementById('textForm').innerHTML = "Tu no eres Carlos..";
  }
*/
  if (userRegistrado.name === usuario.nombre)
  return document.getElementById('textForm').innerHTML = `Tu nombre es ${userRegistrado.name} ${userRegistrado.firstName} con correo electronico: ${userRegistrado.email} y si te encuentras registrado :D`;
  return userRegistrado.name === "" ? document.getElementById('textForm').innerHTML = "No estas registrado, prueba poniendo nombre: Carlos, Apellido: Lopez y Correo: carlos_1992_@hotmail.com y funcionara :)" : "Hola mundo";



/*
  const userVerify = (userRegistrado) => {
    if (!userRegistrado.nombre === "") return  document.getElementById('textForm').innerHTML = "No ingreso un nombre";
    return userRegistrado.name === usuario.nombre ? `Hola mi nombre es ${usuario.nombre}` : "No existe usuario";
  };
  userVerify(userRegistrado);

*/}
