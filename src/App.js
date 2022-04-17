import './App.css';
import './Utilities.css';
import { Header } from './MyComponents/Header';
import { Home } from './MyComponents/Home';
import { Features } from './MyComponents/Features';
import { Footer } from './MyComponents/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Docs } from './MyComponents/Docs';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/docs' element={<Docs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
