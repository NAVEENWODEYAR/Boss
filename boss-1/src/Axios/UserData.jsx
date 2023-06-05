import React from 'react';

import Axios from 'axios';

class UserData extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={test:{}};
	}

		componentDidMount()
		{
			Axios.get('https://dummyjson.com/users');
				.then((resp)=> {
					this.setState({test:resp.data});
				})
				.catch(()=>{})
		}
	render()
	{
		return(
			<>
				<p> Test Component for Axios </p>
				<hr/>
				<p>{JSON.stringify(thi.state.test)}</p>
				<hr/>
				<div className="row">
					<div className="col-md-10">
						<table>
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
									Object.keys(this.state.test).length > 0 ?
									<>
										{
											this.state.test.map((t,index)=>{
												return 
													<tr keys={index}>
														<td>{t.id} </td>
														<td> {t.name} </td>
														<td>{t.email} </td>
														<td> {t.pnone}</td>
														<td> {t.image} </td>
													</tr>
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