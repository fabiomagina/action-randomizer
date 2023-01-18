import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Rotas from "./pages/Routes";

function App() {
  return (
    
    <BrowserRouter>
    
        <div className="App">
          <Rotas />
        </div>

    </BrowserRouter >

  )
}

export default App;
