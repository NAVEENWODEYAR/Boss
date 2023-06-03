// conditional rendering of the components

import React from 'react';
import RenderA from './RenderA';
import RenderB from './RenderB';

const RenderC = (props) => {
		const value = props.value;
			if (value)
			{
				return (
				
				<center>
					<h2> Componet render the other components conditionally </h2>
					<hr/>
					<RenderA />
				</center>
				);
			}
				return(<RenderB />);

	}
			
export default RenderC;