import React from 'react';
import Axios from 'axios';

class UserData2 extends React.Component
{
        constructor(props)
        {
            super(props);
            this.state = {vasu:[]};
        }
        
        componentDidMount()
        {
            Axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response)=>{
                    this.setState({users:response.data})
                })
                .catch(()=>{})
        }

    render()
    {
        return (
            <>
                <h2> Axios, API </h2>
                <hr />
                <p> API Data- {JSON.stringify(this.state)} </p>
                <hr />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <table className='table table-hover'>
                                    <thead className='bg-dark'>
                                        <tr>
                                            <th> ID </th>
                                            <th> Name </th>
                                            <th> E-Mail </th>
                                            <th> Image </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.users.length > 0 ?
                                            <>
                                            {
                                                this.state.users.map((ma)=>{
                                                    return <tr>
                                                            <tr>{ma.id}</tr>
                                                            <tr>{ma.firstName}</tr>
                                                            <tr>{ma.age}</tr>
                                                            <tr>{ma.gender}</tr>
                                                            <tr>{ma.email}</tr>
                                                            <tr>{ma.phone}</tr>
                                                            <tr><img src={ma.image}/> </tr>
                                                    </tr>
                                                })
                                            }
                                            </> : <h2> No data </h2>
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
export default UserData2;