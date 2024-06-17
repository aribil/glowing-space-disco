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

function Form12(props) {
  return (
      <header className="App-header">
            <Abc num="º" nombre=" Nombre"         descripcion="   Descripcion "     precio="  Precio"></Abc>
            <Abc num="1" nombre=" selva negra"    descripcion="fiestas,cumpleaños"  precio="120"/> 
            <Abc num="2" nombre=" torta helada"   descripcion="fiestas en verano"   precio="145"/>
            <Abc num="3" nombre="torta genovesa"  descripcion="fiesta en clasica"   precio="215"/>
            <Abc num="4" nombre="torta de quinua" descripcion="postre o aperitivo"  precio="500"/>
            <Abc num="5" nombre="torta chocolate" descripcion="cumpleaños o aperitivo"  precio="300"/>  
      </header>
  );
}
export default Form12;