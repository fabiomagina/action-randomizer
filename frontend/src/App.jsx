import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/templates/Footer';
import Rotas from "./main/Routes";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Rotas />
          <Footer />
        </div>

    </BrowserRouter >

  )
}

export default App;
