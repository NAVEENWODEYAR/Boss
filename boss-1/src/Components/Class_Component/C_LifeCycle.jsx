// Component LifeCycle methods mounting, updating and unmounting

import React,{Component} from 'react'

class C_LifeCycle extends Component
{

	constructor(props)
	{
		super(props);
		this.state = {myClr:"GREEN"}
	}
	update_Handler = ()=> {
		this.setState({myClr:"BLUEE"});
	}
	// decides weather component should update or not, by default true
	shouldComponentUpdate()
	{
		return false;
	}

	render()
	{

		return(
			<>
				<h2 style={{textAlign:"center",color:"Green"}}> Component Life Cycle </h2>
				<hr/>
				<h3 style={{textAlign:"center"}}> {this.state.myClr} </h3>
				<hr/>
				<button className="btn btn-primary" onClick={this.update_Handler}> CH_Color </button>
			</>);
	}
}
export default C_LifeCycle;