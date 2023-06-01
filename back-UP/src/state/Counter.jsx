
// Event Handling using the state object

import React from 'react';

class Counter extends React.Component 
{
    state = {
            menu:"Available"
             }
        meals = () => {
            this.setState(
                {
                    menu : "South Indian Meals"
                 });
        }
        snacks = () =>{
            this.setState(
                {
                    menu : "Pani Puri"
                });
        }

    render()
    {
        return (
                <div>
                    <center>
                        <h2> Event handling using the state </h2>
                        <hr />
                        <h3> Food Menu -- {this.state.menu}</h3>
                        <button className='btn btn-primary' onBlur={this.meals}> Meals </button>
                        <button className='btn btn-dark' onMouseOver={this.snacks}> Snacks  </button>

                    </center>
                </div>
        )
    }
}
export default Counter;