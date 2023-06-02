import React,{Component} from 'react';

class Message1 extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {msg:"Hello"}
	}

	update_Handler = (value) => {
		this.setState({msg: "Hello "+value});
	}
	render()
	{
		return(
			
			<>	
				<h3> Event Binding </h3>
				<hr/>
				<p> {this.state.msg} </p>
				<hr/>
				<button onClick={this.update_Handler.bind(this,"Good Morning")}> Morning </button>
				<button onClick={this.update_Handler.bind(this,"Good Evening")}> Evening </button>

			</>);
	}
}
export default Message1;