import fotoLogo from '../../assets/img/foto-front-page-2.png';
import '../../App.css';

export default function Frontpage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fotoLogo} className="App-logo" alt="logo" />
        <p>
          Seja Bem-vindo ao Prefiro o da Minha Mãe!
        </p>
      </header>
    </div>
  )
}