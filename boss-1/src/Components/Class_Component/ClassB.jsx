import React,{Component} from 'react';
import ClassD from './ClassD';
import ClassC from './ClassC';


class ClassB extends Component
{
	render(props)
	{
		return(
			<>
			<center>
				<pre> {JSON.stringify(this.props.Details.employee)} </pre>
				<hr/>
				<h1> Employee Details </h1>
				<hr/>
					<table className="table table-hover">
						<thead className="bg-success text-white">
							<th> Sl No </th>
							<th> Name </th>
							<th> ID </th>
							<th> Mail </th>
							<th> Salary </th>
							<th> Designation </th>
						</thead>
						<tbody className="bg-primary">
							<tr> 
								<td> {this.props.Details.employee.sl_No} </td>	
								<td> {this.props.Details.employee.e_Name} </td>
								<td> {this.props.Details.employee.e_ID} </td>
								<td> {this.props.Details.employee.e_Mail} </td>
								<td> {this.props.Details.employee.e_Sal} </td>
								<td> {this.props.Details.employee.e_Designation} </td>
							</tr>
						</tbody>
					</table>
			</center>
			<hr/>
			<ClassD	  test = {this.props.Details.employee}/>
			<hr/>
			<ClassC test = {this.props.Details.employee}/>
			</>
			);
	}
}
export default ClassB;