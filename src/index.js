
import ReactDom from 'react-dom';
// import Comp1 from './Components/Comp1';
// import Header from './Components/Header';
// import Body from "./Components/Body";
// import App from './App';
import Boss from './Boss';
import './index.css';
import React from 'react';

/*rendering the <div>element
ReactDom.render(<div><h1>Hello World</h1>
                    <h2> React Js is the famous library for web interface </h2>
                    <h3> Learning React is fun </h3>
                </div>,document.getElementById('root'));*/

/*ReactDom.render(<Comp1/>,document.getElementById('root'));
ReactDom.render(<Header/>,document.getElementById('root'));
ReactDom.render(<Body/>,document.getElementById('root'));
ReactDom.render(<Footer/>,document.getElementById('root'));*/

/* rendering the APP component
 ReactDom.render(<App/>,document.getElementById('root'));*/

 ReactDom.render(<Boss/>,document.getElementById('root'));
