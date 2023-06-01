import React from 'react';
import { json } from 'react-router-dom';

class Form1 extends React.Component 
{

    state = {
        u_Name : "",
        password : "",
        phone_No : "",
        e_Mail : "",
        city : "",
        state : ""
    };

        // name_Handler = (event) => {
        //     this.setState({u_Name: event.target.value});
        // };

        // password_Handler = (event) => {
        //     this.setState({password: event.target.value});
        // }

        // only one handler
        update_Handler = (event) => {
            this.setState({[event.target.name]:event.target.value});
        }

        submit_Handler = (event) => {
            event.preventDefault();
            console.log(this.state);
        }

        clear_Handler = () => {
            this.setState({
                u_Name : "",
                password : "",
                phone_No : "",
                e_Mail : "",
                city : "",
                state : ""
            },
                )
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
                        <input type="text" placeholder='name' required name='u_Name' onChange={this.update_Handler} /><br />
                        <label> Password </label>
                        <input type="password" required  name='password' onChange={this.update_Handler}/> <br />
                        <label> Phone No </label>
                        <input type="number" name='phone_No' onChange={this.update_Handler}/> <br />
                        <label> Email </label>
                        <input type="email"  name='e_Mail' onChange={this.update_Handler}/> <br />
                        <label> City </label>
                        <input type="text"  name='city'  onChange={this.update_Handler}/> <br />
                        <label> State </label>
                        <input type="text"  name='state' onChange={this.update_Handler} /> <br />

                        <input type="submit" value='Login' />
                        <input type="reset" value="Clear" onClick={this.clear_Handler}/>
                    </div>
                </form>
            
            </>
        );
    }
}
export default Form1;