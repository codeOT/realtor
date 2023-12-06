import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ForgetPassword from './pages/Forgetpass/ForgetPassword';
// import NavBar from './components/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import HouseDetails from './pages/HouseDetails/HouseDetails';
import AddHome from './pages/AddHome/AddHome';
import Contact from './pages/Contact/Contact';
// import About from './components/About';
// import Footer from './components/Footer';
// import Footer from './components/Footer';

function App() {
  return (
    <section>
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/Contact' element={ <Contact />} />
          <Route path='/About' element={ <Home />} />
          <Route path='/Login' element={ <Login />} />
          <Route path='/Signup' element={ <Signup />} />
          <Route path='/ForgetPass' element={ <ForgetPassword />} />
          <Route path='/AddHome' element={ <AddHome />} />
          <Route path='/houses/:id'  element={ <HouseDetails />}/>
        </Routes>
      </BrowserRouter>
    </div>
    {/* <About /> */}
    
    </section>
  );
}

export default App;
