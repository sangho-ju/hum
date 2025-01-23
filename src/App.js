import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './page/login/Login';
import ProductAll from './page/product/ProductAll';
import ProductDetail from './page/productdetail/ProductDetail';
import Navbar from "./Navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ProductAll/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
        </div>
    );
}

export default App;