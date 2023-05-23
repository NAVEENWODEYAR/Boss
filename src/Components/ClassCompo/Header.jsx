import React from "react";
import bimage from "./Images/b.jpeg";
class Header extends React.Component
{
    // class members
    name = "Boss";
    age = 25;
    details = {eID:1,Designation:"Manager"};
    // image = "N:\Pro\FS\SPA\boss\src\Components\ClassCompo\b.jpeg";

    render ()
    {
        return (
            <div>
                <h2> This is the Header component of the Header class.</h2>
                <hr />
                <h3> Employee-Name : {this.name}</h3>
                <h3> Employee-Age :{this.age}</h3>
                <h3> Employee-Details : {this.details.Designation}</h3>
                <img src={bimage} alt="" />  
                <hr />
                <p> Details = {JSON.stringify(this.details)}</p>
                <hr />

            </div>
        );
    }
}
export default Header