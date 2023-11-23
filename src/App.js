import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import QuemSomos from './components/pages/QuemSomos';
import Calculadora from './components/Calculadora'
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";



function App() {
  
  function ativar() {
    alert("Fui ativado")
  }
  
  return (
    <div>
      <h1>Menu</h1>
      
      <BrowserRouter>
      <ul>
        <li><Link to="/"><FaHome /> Home </Link></li>
        <li><Link to="/contato"><MdContactSupport />Contato</Link></li>
        <li><Link to="/quemsomos"><FaRegUserCircle />Quem somos</Link></li>
        <li><Link to="/calculadora"><FaRegUserCircle />Calculadora</Link></li>
      </ul>

      {/* Aqui aparecera o componente da rota */}

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/quemsomos" element={<QuemSomos />}></Route>
          <Route path="/calculadora" element={<Calculadora />}></Route>
        </Routes>
      </BrowserRouter>

      {/* Fim do componente de rota */} 
    <p>Esse é o rodapé show!</p>

    </div>
  );
}

export default App;
