import React,{useEffect, useState} from 'react';
import Axios from 'axios';

let Test = () => {

        let [user,setUser]= useState([]);

        useEffect(()=>{
            Axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response)=>{setUser(response.data)})
                .catch(()=>{})
        })
    return(
        <>
            <h2> Data from the API in the fuctional Component </h2>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className='table table-hover'>
                            <thead className='bg-danger text-white' >
                                <tr>
                                    <th> ID </th>
                                    <th> UsrId </th>
                                    <th> Name </th>
                                    <th> Body </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.length > 0 ?
                                    <>
                                    {
                                        user.map((users)=>{
                                            return <tr>
                                                    <td> {users.userId} </td>
                                                    <td> {users.id} </td>
                                                    <td> {users.title} </td>
                                                    <td> {users.body} </td>
                                                </tr>
                                            
                                        })
                                    }
                                    </>: <h2> Check your API  </h2> 
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Test;