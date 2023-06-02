import React,{Component} from 'react';

class Message extends Component
{
	state = {
		msg : "Hello"
	};

	update_Handler = () =>{
		this.setState({msg : "this.state.msg"});
	}

	render()
	{
		return(
			<>
				<p> Event Binding using the State </p>
				<hr/>
			
					<pre>{this.state.msg} </pre>
					<button className="btn-success" onClick={this.update_Handler}> Click </button>
					<input type="reset"/>
				
			</>
			);
	}
}
export default Message;