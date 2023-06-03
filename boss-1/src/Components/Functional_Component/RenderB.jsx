// conditional rendering of components

import React from 'react';

const RenderB = () => {
	const image = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/berlin-beaches.jpg";
	return(
		<>
			<h2 style={{fontSize:"10rem"}}> Berlin </h2>
			<hr/>
			<img src ={image}/>
		</>);
}
export default RenderB;