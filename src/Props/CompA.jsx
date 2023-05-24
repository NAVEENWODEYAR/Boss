import React,{Component} from 'react';
import CompB from './CompB';
import CompC from './CompC';


class CompA extends Component 
{

    e_Id = 100;
    skill = "AI";
    age = 45;
    salary = 95000;
    render (props)
    {
        return(
            <div>
                <h1> Component A </h1>
                <hr />
                {/* <CompB name = "Ammie" location = "Austin"> <h5> e_Id ={this.e_Id}</h5> </CompB>
                <CompB name = "Bella" location = "Bombay"> <h5> Skill = {this.skill} </h5> </CompB>
                <CompB name = "Clara" location = "Canada"><h5> Age = {this.age} </h5></CompB>
                <CompB name = "Dolly" location = "Darjleeng"> <h5> Salary = {this.salary}</h5></CompB> */}
                <hr />
                <CompC name = "Amitabh Bachhan"> <button> Click </button></CompC>
            </div>
        );
    }
}
export default CompA 