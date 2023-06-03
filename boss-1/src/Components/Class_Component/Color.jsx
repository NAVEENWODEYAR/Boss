
import React,{Component} from 'react';

class Color extends Component
{

	constructor(props)
	{
		super(props);
		this.state = {myClr:"BLUEE"}
	}

	// componentDidMount()
	// {
	// 	setTimeout(()=>{
	// 		this.setState({myClr:"GREEN"})
	// 	},5000)
	// }
	
	// shouldComponentUpdate()
	// {
	// 	return false;
	// }
	// automatically executes after render
	componentDidMount()
	{
		setInterval(()=>{
			this.setState({myClr:"GREEN"})
		},5000)
	}

	render()
	{

		return(
			<>
				<h2 style={{color:"green", fontSize:"5rem",textAlign:"center"}}> Trying to change the color </h2 >
				<hr/>
				<h1 style={{textAlign:"center"}}> Default Color- {this.state.myClr}</h1>
			</>);
	}
}
export default Color;