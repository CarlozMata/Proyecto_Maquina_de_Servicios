function guardarDatos() {
  const user = {
  const name = document.getElementById('name').value;
  const firstName = document.getElementById('firstName').value;
  }
  let text = name;

  document.getElementById('textForm').innerHTML = text;
/*
  if (name=="Carlos" &&& "Alberto") {
    document.getElementById('textForm').innerHTML = "Tu eres Carlos Mata";
  } else {
    document.getElementById('textForm').innerHTML = "Tu no eres Carlos..";
  }*/
  const userVerify = (name) => {
    if (!name.enabled) return "El usuario no esta habilitado"; 

    return name
  }
}
