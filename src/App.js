import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import CalculoAbastecimento from './components/CalculoAbastecimento/CalculoAbastecimento';
import DetalhesAbastecimento from './components/DetalhesAbastecimento/DetalhesAbastecimento';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Início</Link></li>
              <li><Link to='/calcular'>Calcular Abastecimento</Link></li>
              <li><Link to='/detalhes'>Detalhes do Abastecimento</Link></li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calcular' element={<CalculoAbastecimento/>} />
            <Route path='/detalhes' element={<DetalhesAbastecimento/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
