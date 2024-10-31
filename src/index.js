import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'

/* BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css'

/* AOS */
import 'aos/dist/aos.css'


/* COMPONENTS - VIEWS */
import App from './App';
import Footer from './components/Footer';
import Home from './views/Home';
import Services from './views/Services';
import About from './views/About';
import Contact from './views/Contact';
import PreviewService from './views/PreviewService';

/* ERRORS - VIEWS */
import NotFound from './errors/NotFound'

ReactDOM.render(
  <BrowserRouter>
    <App/>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exct path="/services"><Services/></Route>
      <Route path="/about"><About/></Route>
      <Route path="/contact"><Contact/></Route>
      <Route path="/service/:service"><PreviewService/></Route>
      <Route><NotFound/></Route>
    </Switch>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);
