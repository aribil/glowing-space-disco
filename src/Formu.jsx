import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';

function Form1(props) {
  return (
      <header className="App-header">
        <p class="d-inline-flex gap-1">
          <a class="btn btn-primary cont2" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          {props.pro}
          </a>

        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body cont2">
          {props.desc}
          </div>
        </div>
      </header>
  );
}
export default Form1;