import React,{Component} from 'react';
import Axios from 'axios';

class UserData extends Component
{

	constructor(props)
	{
		super(props);
		this.state = {users:[]}
	}

	componentDidMount()
	{
		Axios.get('https://dummyjson.com/products/category/smartphones')
			
			.then((response)=> {
			this.setState({users:response.data})
			})

			.catch(()=> {})
	}
	render()
	{
		return(
			<>
				<h2> Data from the API </h2>
				<pre>{JSON.stringify(this.state)}</pre>
				<hr/>
					<div className="container">
						<div className="row">
							<div className="md-col-8">
								<table className="table table-hover">
									<thead className="bg-success">
										<th> ID </th>
										<th> Name </th>
										<th> E-mail </th>
										<th> Salary </th>
									</thead>
									<tbody>

									{
										this.state.users.length >0 ?
											<>
												{
													this.state.users.users.map((usr)=> {
														return 
														(<tr>
															<td> {usr.id} </td>																					
															<td> {usr.name} </td>
															<td> {usr.emial} </td>
															<td> {usr.sal} </td>
															<td> {this.state.users.length} </td>
														</tr>)
													})
												}
											</>:<h2> No data,{this.state.users.length}, Empty array, please check API </h2>
									}

									</tbody>
								</table>
							</div>
						</div>
					</div>
			</>);
	}
}
export default UserData;
