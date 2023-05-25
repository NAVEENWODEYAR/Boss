
// Event Handling without the state 
import React from 'react';

class Cart1 extends React.Component 
{
    msg ="Good Morning";
            
    wish_AM =() =>{
        this.msg = "Good Evening";
        console.log(this.msg);
        this.forceUpdate();
    }        
    render()
    {
        return(
                <div>
                    <center>
                        <h2 onClick={this.wish_AM}> Hello : {this.msg}</h2>
                    </center>
                </div>
        )
    }
}
export default Cart1;