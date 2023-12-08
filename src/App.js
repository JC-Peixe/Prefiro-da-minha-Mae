import fotoLogo from './foto-front-page-2.png';
import './App.css';

function App() {
  return (
    
    <div className="App">
        <div className='teste'>
      <header className="App-header">
        <img src={fotoLogo} className="App-logo" alt="logo" />
        <p>
          Seja Bem-vindo ao Prefiro o da Minha Mãe!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a> */}
      </header>
        </div>

    </div>
  );
}

export default App;
