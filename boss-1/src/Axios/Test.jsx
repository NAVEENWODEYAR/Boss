import React,{Component} from 'react';
import Axios from 'axios';
class Test extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {today:[]};
    }

        componentDidMount()
        {
            Axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response)=>{
                    this.setState({today:response.data});
                })
                .catch(()=>{})
        }

    render()
    {
        return(
            <>  
                <h1 style={{fontSize:"10rem", color:"blue",fontFamily:"cursive"}}> API </h1>
                <hr />
                <pre>{JSON.stringify(this.state)}</pre>
                <hr />
                <pre>{JSON.stringify(this.state.today).length}</pre>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th> Id </th>
                                        <th> Name </th>
                                        <th> E-Mail </th>
                                        <th> Phone </th>
                                        <th> Address </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.today.length > 0 ?
                                        <>
                                        {
                                            this.state.today.map((users)=>{
                                                return <>
                                                    <tr> 
                                                        <td> {users.id} </td>
                                                        <td> {users.name} </td>
                                                        <td> {users.email} </td>
                                                        <td> {users.phone} </td>
                                                        <td> {JSON.stringify(users.address)} </td>
                                                    </tr>
                                                    </>
                                            })
                                        }
                                        </> : <h2> Empty API </h2>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Test;