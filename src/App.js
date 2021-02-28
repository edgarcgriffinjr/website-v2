import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'


import Nav from './components/nav/nav'
import Hero from './components/hero'
import About from './components/about'
import Featured from './components/featured'
import Contact from './components/contact'
import Footer from './components/footer'



function App() {
  return (
   <Router>
    <Nav/>   
      <Hero /> 
      <About />
      <Featured />
      <Contact />
      <Footer />
   </Router>
  );
}

export default App;
