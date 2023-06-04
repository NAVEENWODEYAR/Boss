// Hooks introduced in 16.8 for state management in the functional component
import React,{useState} from 'react';

let UseState = () => {

	let stl = {color:"orange",fontSize:"5rem",backgroundColor:"blue"};
	const [car,setCar] = useState(
							{
								carName:"Mustang",
								model :20203,
								brand:"Ford",
								cost:"60L",
								color:"White"
							});

		let update_Handler = () => {
			setCar(p=> {
				return {...p,color:"Yellow"}
			})
		}

	return(
		<>
			<h1 style={stl}> useState is a hook for maintaining the state in functional component </h1>
			<hr/>
			<h2> {JSON.stringify(car)}  </h2>
			<hr/>
			<h2> My car --{car.carName} </h2>
			<button className="btn btn-success" onClick={update_Handler}> Color </button>
		</>);
}
export default UseState;