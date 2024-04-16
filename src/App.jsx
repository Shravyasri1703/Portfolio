import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/contact/Contact';
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallax/Parallax';
import Portfolio from './Components/portfolio/Portfolio';
import Services from './Components/services/Services';
import Test from './Test';
import './app.scss'

const App = () => {
  return <div>

  
    <section id="Homepage">
     <Navbar />
    <Hero /> 
     </section>
  <section id='Services'><Parallax type='services' /></section> 
   <section><Services /></section> 
    <section id='Portfolio'><Parallax type='portfolio' /></section> 
    <Portfolio /> 
  <section id='Contact'>
   <Contact />
</section>  
</div>; 
 

};

export default App;
