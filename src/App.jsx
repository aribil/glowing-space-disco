import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import {Link} from "react-dom";
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="principal">
        <div className='cua1'>
            <div className="App">
                <h1>torta: {props.torta}</h1> 
                <h1>puntuacion: {props.ingredi}</h1>
            </div>
        </div>

        <div className='cua1'>    
            <div className='grafico'>
                <img className="grafico" src={props.dibujos} />
            </div>
        </div>

        </div>

      </header>
    </div>
  );
}

export default App;
