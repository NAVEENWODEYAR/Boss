// conditionally rendering the components using the ternery operator

import React from 'react';
import RenderA from './RenderA';
import RenderB from './RenderB';

const RenderD = (props) => {
	const value = props.value;

	return(
		<center>
			{value? <RenderB/>:<RenderA/>}
		</center>);
}
export default RenderD;