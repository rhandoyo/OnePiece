import React from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/about" component={ About }/>
        <Route exact path="/service" component={ Services } />
        <Redirect to = "/" />
      </Switch>
      <br/>
      <Footer />
    </>
  );
}

export default App;
