import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';

function List(props) {
  return (

      <header className="App-header">
        
                <div className="cont1">
                    <img className="img-fluid" src={props.dibujos}></img>
                </div>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                        {props.categoria}
                    </li>
                        
                    <li className="list-group-item">
                        {props.nombre}
                        </li>

                    <li className="list-group-item">precio de : 
                        {props.precio} Bs.
                    </li>
                </ul>

      </header>

  );
}

export default List;
