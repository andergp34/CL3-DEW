import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Social from "./Social";
import Titulo from "./Titulo";
import Header from "./Header";
import Horario from "./horario";
import Coleccionable from "./Coleccionable";
import Coleccionable2 from "./Coleccionable2";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <div id="Principal">
      <div className='portal'>
          <nav>
              <a className="item" href="pagina1">Home</a>
              <a className="item" href="#">Productos</a>
              <a className="item" href="#">Lanzamientos</a>
              <a className="item" href="#">Testimonios</a>
              <a className="item" href="#">Servicios</a>
              <a className="item" href="#">Contactenos</a>
          </nav>
      <Social/>
      <Titulo/>
      <Header/>
      <Horario/>
      <Coleccionable/>
      <Coleccionable2/>

      </div>
      </div>
  </React.StrictMode>
);

//aloha
// reportWebVitals();
