import React from 'react';
import { json } from 'react-router-dom';

class Form1 extends React.Component 
{

    state = {
        u_Name : "",
        password : ""
    };

        name_Handler = (event) => {
            this.setState({u_Name: event.target.value});
        };

        password_Handler = (event) => {
            this.setState({password: event.target.value});
        }

        submit_Handler = (event) => {
            event.preventDefault();
            console.log(this.state);
        }

        clear_Handler = () => {
            this.setState({u_Name : "",
            password : "" })
        }
    render()
    {
        return(
            <>
                <h2> Login Page </h2><br />
                <p> {JSON.stringify(this.state )}</p>
                <form onLoad={this.submit_Handler}>
                    <div>
                        <label> Name </label>
                        <input type="text" placeholder='name' required onChange={this.name_Handler} /><br />
                        <label> Password </label>
                        <input type="password" required  onChange={this.password_Handler}/> <br />
                        <label> Phone No </label>
                        <input type="number"  /> <br />
                        <label> Email </label>
                        <input type="email"  /> <br />
                        <label> City </label>
                        <input type="text"  /> <br />
                        <label> State </label>
                        <input type="text"  /> <br />

                        <input type="submit" value='Login' />
                        <input type="reset" value="Clear" onClick={this.clear_Handler}/>
                    </div>
                </form>
            
            </>
        );
    }
}
export default Form1;