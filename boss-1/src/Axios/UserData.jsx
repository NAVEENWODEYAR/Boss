import React from 'react';
import Axios from 'axios';

class UserData extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={user:{}};
	}

		componentDidMount()
		{
			Axios.get('https://dummyjson.com/users')
				.then((resp) => {
					this.setState({user:resp.data})
				})
				.catch(()=>{})
		}
	render()
	{
		return(
			<>
				<p> Test Component for Axios </p>
				<hr/>
				{/* <p>{JSON.stringify(this.state.user)}</p> */}
				<hr/>
				<div className="row">
					<div className="col-md-10">
						<table className='table table-hover'>
							<thead>
								<tr>
									<th> ID </th>
									<th> Name </th>
									<th> E-mail</th>
									<th> Ph Number </th>
									<th> Image </th>
								</tr>
							</thead>
							<tbody>
								{
									Object.keys(this.state.user).length > 0 ?
									<>
										{
											this.state.user.users.map((user,index)=>{
												return <>
													<tr keys={index}>
														<td>{user.id} </td>
														<td> {user.firstName} </td>
														<td>{user.email} </td>
														<td> {user.phone}</td>
														<td> <img src={user.image} height={"50px"}/> </td>
													</tr>
													</>
											})
										}
									</> : <h1> Check your API </h1>
								}
							</tbody>
						</table>
					</div>
				</div>
			</>);
	}
}
export default UserData;