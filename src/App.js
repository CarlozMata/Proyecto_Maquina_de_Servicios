import './CSS/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
    <h1 class="title-nav">PAGO DE SERVICIOS</h1>
  </nav>
  <section class="section-dp">
    <div class="section-div-dp">
      <h2>Ingresa tus datos:</h2>
      <label>Nombre(s): <input type="text" id="Name" name="Name" placeholder="Ingresa tú nombre" /></label>
      <label>Apellidos: <input type="text" id="firstname" name="firstname" placeholder="Ingresa tú apellido"/></label>
      <label>Correo Electronico: <input type="text" id="email" name="email" placeholder="Ingresa tu Correo"/></label>
      <div class="section-div-dp-btn">
        <button>Btn</button>
      </div>
  </div>
  </section>
  <footer>Footer</footer>
</header>
    </div>
  );
}

export default App;
