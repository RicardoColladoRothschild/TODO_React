import './App.css';
import logo from './platzi.webp';

function App() {
  return (
    <div className="App">
      <h2>Has completado 4 de 5</h2>
      <ul>
      <TodoItem completed={2} total={5}/>
      <TodoItem completed={3} total={5}/>
      <TodoItem completed={4} total={5} />
      </ul>
     

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem(props){
    return (
      <li>
        <span>V</span>
        <p>Mejorar en React</p>
        <h1>
          Completaste:
            {props.completed} de
            {props.total} TO-DOs
        </h1>
        <span>X</span>
      </li>
    );
}

export default App;
