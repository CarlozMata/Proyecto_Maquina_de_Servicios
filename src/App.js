import './CSS/styles.css';
import { useRef } from 'react';

export function Button() {
  return( <button>hola soy el boton</button> )
}

export function App() {
  const usuarioNombreRef = useRef(null)

  const usuario = {
    nombre: "Carlos",
    apellido: "Lopez",
    correo : "carlos_1992_@hotmail.com"
  };

  function guardarDatos(event) {
    const userName = usuarioNombreRef?.current?.value;
    console.log(userName)
    const userRegistrado = {
    name:userName,
//  name : document.getElementById('name').value,
    firstName : document.getElementById('firstName').value,
    email : document.getElementById('email').value
    }
    if (userRegistrado.name === usuario.nombre && userRegistrado.firstName === usuario.apellido && userRegistrado.email === usuario.correo)
    return document.getElementById('textForm').innerHTML = `Tu nombre es ${userRegistrado.name} ${userRegistrado.firstName} con correo electronico: ${userRegistrado.email} y si te encuentras registrado :D`;
    return userRegistrado.name === "" ? document.getElementById('textForm').innerHTML = "No estas registrado, prueba poniendo nombre: Carlos, Apellido: Lopez y Correo: carlos_1992_@hotmail.com y funcionara :)" : document.getElementById('textForm').innerHTML = "Usuario Erroneo";
  }

  function metodosString () {

    const  texto = document.getElementById('cadenaTexto').value

    const resultLength = (element, result) => {
      const node = document.createElement("span");
      const metodoLength = result;
      const textnode = document.createTextNode(metodoLength);
      node.appendChild(textnode);
      document.getElementById("metodoLength").appendChild(node);
    }
    const textoLength = texto.length
    resultLength(texto, textoLength)

    const resultToUpperCase = (element, result) => {
      const node = document.createElement("span");
      const metodoToUpperCase = result;
      const textnode = document.createTextNode(metodoToUpperCase);
      node.appendChild(textnode);
      document.getElementById("metodoToUpperCase").appendChild(node);
    }

    const textoToUpperCase = texto.toUpperCase();
    resultToUpperCase(texto, textoToUpperCase)

    const resultToLowerCase = (element, result) => {
      const node = document.createElement("span");
      const metodoToLowerCase = result;
      const textnode = document.createTextNode(metodoToLowerCase);
      node.appendChild(textnode);
      document.getElementById("metodoToLowerCase").appendChild(node);
    }

    const textoToLowerCase = texto.toLowerCase();
    resultToLowerCase(texto, textoToLowerCase)


  }

  return (
    <div id="" className="">
      <nav>
    <h1 class="title-nav">{`Paga tus Servicios: ${usuario.nombre}`}</h1>
  </nav>

  <section class="section-dp">
    <div class="section-div-dp">
      <form action="" name="form1">

      <h2>Ingresa tus Datos:</h2>
      <label>Nombre(s): <input type="text" id="name" ref={usuarioNombreRef} name="Name" placeholder="Ingresa tú nombre" /></label>
      <label>Apellidos: <input type="text" id="firstName" name="firstname" placeholder="Ingresa tú apellido"/></label>
      <label>Correo Electronico: <input type="text" id="email" name="email" placeholder="Ingresa tu Correo"/></label>
      <div class="section-div-dp-btn">
      <input type="button" value="Enviar" onClick={guardarDatos} />
      </div>
      </form>
      <textarea id="textForm" cols="30" rows="10"></textarea>
  </div>
  </section>

  <section class="section-dp">
    <div class="section-div-dp">
      <form action="" name="form2">



      <h2>Métodos de String en Javascript:</h2><br/>
      <label>Ingresa una cadena de texto con espacios: <input type="text" id="cadenaTexto" name="CadenaTexto" placeholder="Por Ejemplo: Esta es en JavaScript" /></label>
      <h3>- Length</h3>
      <p>De una serie de caracteres devuelve una unidad de longitud.</p>
      <span id="metodoLength">Length: </span>
      <h3>- toUpperCase</h3>
      <p>A una serie de caracteres los devuelve en mayúsculas.</p>
      <span id="metodoToUpperCase">toUpperCase: </span>
      <h3>- toLowerCase</h3>
      <p>A una serie de caracteres los devuelve en minúsculas.</p>
      <span id="metodoToLowerCase">toLowerCase: </span>
      <br/><input type="button" value="Resolver Metodos" onClick={metodosString}/>
      <div class="section-div-dp-btn">
      </div>



      </form>
    </div>
  </section>
<footer>
  <div class="footer">
    <div><a href="https://carlozmata.com/" target="__blank">CarlozMata © 2022</a></div>
      <div class="footer-right">
        <a href="https://github.com/CarlozMata" target="__blank">GitHub</a>
        <a href="https://www.linkedin.com/in/carlosalbertolopezmata/" target="__blank">LinkedIn</a>
        <a href="https://twitter.com/CarlozMata" target="__blank">Twitter</a>
    </div>
  </div>
</footer>
    </div>
  );
}






// export default App;
