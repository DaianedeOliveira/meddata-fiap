import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './../components/pages/Login/index'
import FooterBase from './components/FooterBase';
import './Index.css';
import Sobre from '../components/Sobre';
import Servicos from '../components/Servicos';

export function App() {
return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>      
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
        <Route path="/servicos" element={<Servicos/>}></Route>
        <Route path="/footerbase" element={<FooterBase/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
            
        </Routes>
        </BrowserRouter>
    
        </>

);
}

export default App;