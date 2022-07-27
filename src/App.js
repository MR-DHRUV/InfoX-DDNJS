import React from 'react';
import logo from './logo.svg';
import './Components/Assets/css/plugins.css';
import './Components/Assets/css/style.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      {/* <About/> */}
      {/* <Contact /> */}
      <Nav/>
      <Home/>
    </div> 
  );
}

export default App;
