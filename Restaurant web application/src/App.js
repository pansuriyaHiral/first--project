
//import { Dialog } from '@mui/material';
import './App.css';
//import Layout from './components/Layout.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Menu from './pages/Menu.js';
import Contact from './pages/Contact.js';
import PagenotFound from './pages/PagenotFound.js';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/*" element={<PagenotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
