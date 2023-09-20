import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Whole from './pages/Whole';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
      <Routes>
        <Route>
          <Route path='/' element={<Whole/>}/>
          
         
        </Route>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
