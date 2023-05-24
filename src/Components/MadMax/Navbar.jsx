import React,{Component} from 'react';

class Navbar extends Component 
{

    render()
    {
        return(
            <nav>
                <div className='navbar navbar-dark bg-dark'>
                    <a href="http://localhost:3000/" className='navbar-brand'> <strong> .MadMax Events </strong>@mad at photography@ </a>
                  </div>
            </nav>
        )
    }
}
export default Navbar;