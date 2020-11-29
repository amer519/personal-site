import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact';
// import SignUp from './components/pages/SignUp';
import About from './components/pages/About';
import Footer from './components/Footer'


function App() {
  return (
    
    <div>
      <Router>
        <Navbar/>
        <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          {/* <Route path='/sign-up' exact component={SignUp} /> */}
        </Switch>
      </Router>

    </div>
  );
  
}

export default App;
