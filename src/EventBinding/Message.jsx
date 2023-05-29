import React,{Component} from 'react';

class Message extends Component
{

    state = {
             msg : "Hello, "
    }

    /*// update event handler 
    update_Msg = ()=>{
        this.setState({
            msg : "Good Morning"
        })
    }*/

    // update event binding
    update_Msg = (value) => {
        this.setState({
            msg :  value,
        })
    }
    render()
    {
        return(
            <div>
                <h2> Event Binding </h2>
                <hr />
                <h3>{this.state.msg}</h3>
                <hr />
                <button onClick={this.update_Msg. bind(this,"Good Morning")}> Button 1</button><br />
                <button onClick={this.update_Msg.bind(this,"Good Afternoon")}> Button 2</button><br />
                <button onClick={this.update_Msg. bind(this,"Good Evening")}> Button 3</button><br />
                <button onClick={this.update_Msg. bind(this, "Good Night")}> Button 4</button><br />
            </div>
        );
    }
}
export default Message;