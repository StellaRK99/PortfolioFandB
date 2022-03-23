import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Home />} />
        <Route path = "/Contact" element = {<Contact /> } />
        <Route path = "/Projects" element ={<Projects />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}


export default App;
