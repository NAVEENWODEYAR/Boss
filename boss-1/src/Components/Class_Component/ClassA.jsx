import React,{Component} from 'react';
import ClassB from './ClassB';

class ClassA extends Component
{
	state = {
	
		employee : 
		{
			sl_No : 2,
			e_Name : "Bhaskar K",
			e_ID : 10001645,
			e_Mail : "boss@gmail.com",
			e_Sal : 974644,
			e_Designation : "CEO"
		}

	};
	render(props)
	{
		return (
			<>
				<h2> Employee Details </h2>
				<hr/>
				<pre> {JSON.stringify( this.state.employee)}</pre>
				<hr />
				<ClassB  Details = {this.state}/>
			</>
			);
	}
}
export default ClassA;