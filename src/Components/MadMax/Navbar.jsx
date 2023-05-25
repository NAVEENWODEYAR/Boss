import React,{Component} from 'react';

class Navbar extends Component 
{

    render()
    {
        return(
            // <nav>
            //     <div className='navbar navbar-expand navbar-dark bg-dark'>
            //         <a href="http://localhost:3000/" className='navbar-brand'> <strong> .MadMax Events </strong>@mad at photography@ </a>
                  
            //       </div>
            // </nav>

                <nav className='navbar navbar-expand navbar-primary bg-dark' id="navbarSupportedContent">
                    <a href="http://localhost:3000/" className='navbar-brand'> MadMax</a>
                        <div className='collapse navbar-collapse'>
                            <ul className='navbar-nav mr-auto'>
                                <li className='nav-item-active'>
                                    <a href="#"className='nav-link'> Home </a>
                                </li>

                                <li className='nav-list'>
                                    <a href="#" className='nav-link'> About Us </a>
                                </li>
                                 
                                 <li className='nav-item dropdown'>
                                    <a href="#" className='nav-link dropdown toggle' role='button' data-toggle='dropdown'aria-expanded='false'>Services</a>
                                    
                                    <div className='dropdown-menu'>
                                        <a href="#" className='dropdown-item'> Wedding Photograpy </a>
                                        <a href="#" className='dropdown-item'> Party's Photograpy </a>
                                            <div className='dropdown-divider'></div>
                                            <a href="#" className='dropdown-item'> Baby Shoot </a>
                                    </div>
                                 </li>

                                 <li className='nav-list'>
                                    <a href="#" className='nav-link'> Our Team </a>
                                 </li>
                            </ul>

                                {/* // Search button  */}
                                <form className='form-inline my-2 my-lg-0'>
                                    <input className='form-control mr-sm-2' type='search'  placeholder='Search' arial-aria-label='Search'/>
                                    <button className='btn btn-outline-success' my-2 my-sm-0>Search</button>
                                </form>
                        </div>
                </nav>
        )
    }
}
export default Navbar;