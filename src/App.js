import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from './components/About/About';
import GetStart from './components/getStart/getStart';
import ContactUs from './components/ContactUs/ContactUs';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  return (  
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <GetStart/>
      <ContactUs />
      <Team/>
      <Footer/>
     
    </div>
  );
}

export default App;
