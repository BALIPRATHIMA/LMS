import Login from './UI/Login';
import Main from './UI/Main';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
   <Routes>
   <Route path="/" Component={Login} />
   <Route path="/home" Component={Main} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
