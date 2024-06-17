import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';

function Abc(props) {
  return (
    <div class="table-responsive-md">
      <header className="App-header1">
        <table className="table">
          <tbody>
            <tr>
              <th className="table-dark" scope="row">{props.num}</th>
              <td className="table-dark" scope="row">{props.nombre}</td>
              <td className="table-dark" scope="row"> {props.descripcion}</td>
              <td className="table-dark" scope="row">{props.precio} Bs.</td>              
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}
export default Abc;