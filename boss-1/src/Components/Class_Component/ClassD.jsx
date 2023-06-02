import React,{Component} from 'react';

class ClassD extends Component
{
	render(props)
	{
		return(
			<>
				<center>
					<h2>  Class Component </h2>
					<hr/>
					<h5> {JSON.stringify(this.props.test)} </h5>
					<hr/>
					<h3>  E-Mail = {this.props.test.e_Mail}</h3>
				</center>
			</>
			);
	}
}
export default ClassD;