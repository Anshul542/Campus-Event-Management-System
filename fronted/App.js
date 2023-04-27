 import NavBar from './components/NavBar';
import './App.css';
 import { BrowserRouter,Route,Routes,route } from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import Footer from "./components/Footer";
import Service from './components/Service';
import Contact from './components/Contact';
import ServicesAdmin from './components/admin/ServicesAdmin';
import ListAdmin from './components/admin/ListAdmin'
 import AddAdmin from './components/admin/AddAdmins';
  import LoginAdmin from './components/admin/LoginAdmin';
   import AdminDas from './components/admin/AdminDas';
function App() {
  return (
    <>
      <BrowserRouter>
        {localStorage.getItem("token") ? <h1>Admin Panel</h1> : <NavBar />}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/service" element={<ServicesAdmin />} />
          <Route path="/admin/list" element={<ListAdmin />} />
          <Route path="/admin/add" element={<AddAdmin />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/dashboard" element={<AdminDas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
