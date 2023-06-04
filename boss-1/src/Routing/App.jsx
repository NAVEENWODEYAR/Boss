import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './Comp/Home';
import About from './Comp/About';
import Services from './Comp/Services';
import Contact from './Comp/Contact';

let App = () => {

    return(
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/home" Component={Home}/>
                <Route path="/about" Component={About}/>
                <Route path="/services" Component={Services}/>
                <Route path="/contact" Component={Contact}/>
            </Routes>
        </Router>
        </>
    );
}
export default App;