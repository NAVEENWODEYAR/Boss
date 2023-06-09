import React,{Component} from 'react';
import Navbar from './Compo/Navbar1';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Compo/Home';
import Contact  from './Compo/Contact';
import About from './Compo/About';
import Services from './Compo/Services';

class App extends Component
{
    render()
    {
        return(
            <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" Component={Home}/>
                    <Route path="/contact" Component={Contact}/>
                    <Route path="/about" Component={About}/>
                    <Route path="/services" Component={Services}/>
                </Routes>
            </Router>
            </>
        );
    }
}
export default App;