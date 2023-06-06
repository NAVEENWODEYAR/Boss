import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        Axios.get('https://dummyjson.com/users')
            .then((resp) => {
                this.setState({ user: resp.data })
            })
            .catch(() => { })
    }
    render() {
        return (
            <div className='container'>
                <h3>User Component</h3>
                <pre>{JSON.stringify(this.state.user)}</pre>
                <div className="row">
                    <div className="col-md-10">
                        <table className='table table-hover'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th> E-mail </th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(this.state.user).length > 0 ?
                                        <>
                                            {
                                                this.state.user.users.map((user, index) => {
                                                    return <tr key={index}>
                                                        <td>{user.id}</td>
                                                        <td>{user.maidenName}</td>
                                                        <td>{user.age}</td>
                                                        <td> {user.email} </td>
                                                        <td><img src={user.image} height={'40px'} /></td>
                                                    </tr>
                                                })
                                            }
                                        </> : <h3>
                                            No Data
                                        </h3>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users