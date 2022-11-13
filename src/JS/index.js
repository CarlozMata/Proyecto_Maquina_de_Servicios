function guardarDatos() {

  let name = document.getElementById('name').value;
  let firstName = document.getElementById('firstName').value;
  let email = document.getElementById('email').value;

  let text = "Tú nombre es: " + name + " " + firstName + " y el correo es " + email;

  document.getElementById('textForm').innerHTML = text;
/*
  if (name=="Carlos" &&& "Alberto") {
    document.getElementById('textForm').innerHTML = "Tu eres Carlos Mata";
  } else {
    document.getElementById('textForm').innerHTML = "Tu no eres Carlos..";
  }*/
}
