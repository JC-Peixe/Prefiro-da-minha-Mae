import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frontpage from './pages/frontpage';
import Inicio from './pages/home';
import Cardapio from './pages/cardápio';
import Menu from './componentes/Menu';

function AppRoutes() {
  return (
   <BrowserRouter>
   <Menu/>
       <Routes>
        <Route path='/' element={<Frontpage/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/cardapio' element={<Cardapio/>}/>
        <Route path='*' element={<div>Página não encontrada! </div>}/>

       </Routes>
   </BrowserRouter>
  );
}

export default AppRoutes;
