// Event Handling using the state object

import React from 'react';

class Counter2 extends React.Component 
{

    img = "";
    render()
    {
        return(
            <div>
                <center>
                    <h2> Event Handling using state </h2>
                    <table className='table'>
                        <thead>
                            <th> Image </th>
                            <th> Name </th>
                            <th> Qty </th>
                            <th> Price </th>
                            <tbody>
                                <tr>
                                    <td> {this.img}</td>
                                </tr>
                            </tbody>
                        </thead>
                    </table>
                </center>
            </div>
        );
    }
}
export default Counter2;