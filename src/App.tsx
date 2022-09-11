import './styles/global.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { CartProvider } from './components/context/CartContext';
import { ScrollToTop } from './components/ScrollToTop';

function App(): JSX.Element {
  return (
    <div className="App">
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}>
            <Route path="/shop/{id}"></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
