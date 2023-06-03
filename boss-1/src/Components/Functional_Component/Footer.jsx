import React,{useState} from 'react';
import Car from './Car';

const Footer = (props) => {

	return(
		<>
			<h4> useState hook is used in the functional components, {props.note} </h4>
			<hr/>
			<Car clr={{color:"Blue"}} />
		</>);
}
export default Footer;