import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Catalog from './Components/Pages/Catalog';
import ContactUs from './Components/Pages/ContactUs';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import RefundPolicy from './Components/Pages/RefundPolicy';
import Search from './Components/Pages/Search';
import Tos from './Components/Pages/Tos';
import Error from './Components/Error';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import '../src/Assets/Css/Page.css';
import '../src/Assets/Css/product.css'


function App() {
  const location = useLocation()
  let pathurl = location.pathname

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/aboutus' element={<AboutUs />}></Route>
        <Route exact path='/catalog' element={<Catalog />}></Route>
        <Route exact path='/contactus' element={<ContactUs />}></Route>
        <Route exact path='/privacypolicy' element={<PrivacyPolicy />}></Route>
        <Route exact path='/refundpolicy' element={<RefundPolicy />}></Route>
        <Route exact path='/search' element={<Search />}></Route>
        <Route exact path='/tos' element={<Tos />}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route exact path='/product/:id' element={<Product />}></Route>
        <Route path='*' exact={true} element={<Error />}></Route>
      </Routes>
      {/* <Footer /> */}
      {pathurl === "/checkout/information" || pathurl === "/checkout/shipping" || pathurl === "/checkout/payment" ? null : <Footer />}
    </div>
  );
}

export default App;
