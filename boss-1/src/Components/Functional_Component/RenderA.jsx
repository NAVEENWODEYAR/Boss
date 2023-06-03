// conditional rendering of components 
import React from 'react';

const RenderA = () => {
	let img = "https://assets.architecturaldigest.in/photos/60082549082e4f0ba09487b4/4:3/w_1024,h_768,c_limit/Namma-Bengaluru-BEU-logo-1366x768.jpg";
	return(
		<>
			<h2 style={{fontSize:"10rem"}}> Bengaluru </h2>
			<hr/>
			<img src = {img}/>
		</>);
}
export default RenderA;