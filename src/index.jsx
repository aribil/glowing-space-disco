import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Abc from './Menu';
import Form1 from './Formu';
import List from './lista';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" >PASTELERIA ARIANA ABIGAIL QUISBERT GIRONDA</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">?</span>
        </button>
      </div>
    </nav>
    <h1 className='app'>cateagorias puntuacion</h1>
    <App torta="selva negra" dibujos="selva negra.png" ingredi="5 estrellas"/>
    <App torta="torta helada" dibujos="chant.png" ingredi="3 estrellas"/>
    <App torta="torta genovesa" dibujos="Genovesa.jpg" ingredi="4 estrellas"/>
    <App torta="torta de quinua" dibujos="maxresdefault.jpg" ingredi="5 estrellas"/>
    <App torta="torta de chocolate" dibujos="torta.webp" ingredi="5 estrellas"/>

    <h1 className='app'>informacion</h1>
    <Form1 pro="nuestros ingrediente principales" desc="huevo,leche,harina,azucar,mantequilla,bicarbonato y amor"/>
    <Form1 pro="mision" desc="llegar alk paladar boliviano"/>
    <Form1 pro="vision" desc="tener una sucursal en cada departamento de bolivia"/>
    <Form1 pro="ndescripcion" desc="la paasteleria ariana abigail fue una idea que empezo como un emprendimiento pequeño y familiar"/>

    <h1 className='app'>menu</h1>
    <Abc num="º" nombre=" Nombre"         descripcion="   Descripcion "     precio="  Precio"></Abc>
    <Abc num="1" nombre=" selva negra"    descripcion="fiestas,cumpleaños"  precio="120"/> 
    <Abc num="2" nombre=" torta helada"   descripcion="fiestas en verano"   precio="145"/>
    <Abc num="3" nombre="torta genovesa"  descripcion="fiesta en clasica"   precio="215"/>
    <Abc num="4" nombre="torta de quinua" descripcion="postre o aperitivo"  precio="500"/>
    <Abc num="5" nombre="torta chocolate" descripcion="cumpleaños o aperitivo"  precio="300"/>    
    <h1 className='App-header'></h1>
    <h1 className='app'>listas</h1>
    <List dibujos="selva negra.png" categoria="Mas vendida de esta temporada" nombre="selva negra"  precio="120" />
    <List dibujos="Genovesa.jpg" categoria="clasica" nombre="Torta Genovesa"  precio="215" />
    <List dibujos="chant.png" categoria="Innovacion" nombre="Torta que quinoa"  precio="500" />
    <List dibujos="maxresdefault.jpg" categoria="Innovacion" nombre="Torta que quinoa"  precio="500" />
    <List dibujos="torta.webp" categoria="Innovacion" nombre="Torta que quinoa"  precio="500" />

 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
