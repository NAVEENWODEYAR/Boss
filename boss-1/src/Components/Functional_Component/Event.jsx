// react event object
import React from 'react';

	const Event = () => {

		let update_Handler = (a) => {
			alert(a);
		}

		return(
			<>
				<h2 style={{textAlign:"center",fontSize:"5rem",color:"orange"}}> React Event Object </h2>
				<hr/>
				<button className="btn btn-outline-successs" onClick={()=>update_Handler("Event Object")}> Test., </button>
			</>);
	}
	export default Event;