Presentacion Personal
--
Nombre:
--
 Raul andres gomez reatiga

edad:
--
17 / ya casi 18


-------

```javascript
(async () => {
  try {
    console.log('hola soy raul andres gomez reatiga ,me gusta jugar futbol y todo lo que se trate con el deporte , me gusta la progracion y espero trabajar en esto soy una persona dedicada y capaz muy amigable y me gusta mucho bromear y estar con amigos tanto como me gusta ser dedicado ah algo ');
  } catch (err) {
    console.log('err 💥');
  }
 })();
```


-----


puedes hacer esta mimsma paguina pero con cpnpónentes de react no solo codigo duro necesito que la hgas en componentes 
e

este es mi index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

este es mi app.js

// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img src="unnamed.png" alt="Logo de Dropbox" />
        <h1>Dropbox</h1>
        <div className="div1">
          <a href="#">¿Por qué Dropbox?</a>
          <a href="#">Productos</a>
          <a href="#">Soluciones</a>
          <a href="#">Precios</a>
        </div>
        <div>
          <img src="icone-du-monde-noir.png" alt="img " width="20px" height="19.8px" style={{ padding: '10px', marginTop: '4.7px' }} />
        </div>
        <div className="div2">
          <a href="#">Contacto</a>
          <a href="#">Obtener la Aplicación</a>
          <a href="#">Registrarse</a>
          <a href="#">Iniciar Sesión</a>
        </div>
        <button className="blue-button">Comenzar
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="-2 -5 19 15">
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
      </div>

      <div className="main-content">
        <h2>Únete a los más de 700 millones</h2>
        <h2>de usuarios registrados que</h2>
        <h2>que confían en Dropbox</h2>
        <p>Fácil de utilizar, confiable, privado y seguro. No es de extrañar que Dropbox sea la elección para almacenar</p>
        <p>y compartir tus archivos más importantes.</p>

        <button className="blue-button">Encuentra tu plan!
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="-2 -5 19 15">
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
      </div>

      <div className="video-section">
        <video width="900px" height="900px" autoPlay loop controls>
          <source src="file:///home/arteM02-088/Downloads/Dropbox_Homepage(1).mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;

este es el cual necesito que hagas con componentes
