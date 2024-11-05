import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';

import Register from './Register';




function App() {
  return (
    <div  className="App">
      
      
     <BrowserRouter>
     <Routes>
  
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<Register/>}></Route>

     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;