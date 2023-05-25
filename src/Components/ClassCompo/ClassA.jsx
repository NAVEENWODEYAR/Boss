
import React,{Component} from 'react';
import ClassB from './ClassB';
import FunctionC from './FunctionC';

class ClassA extends Component 
{   
    msg = "Props is easy";
    details = {id:1,ename:"Bhaskar",sal:98765,location:"Bengaluru",designtion:"Manager"};
    render(props)
    {
        return(
                <div>
                    <center>
                        <h2>Component is a re-usable piece of code </h2><br />
                        <h2> Component name - ClassA </h2>
                        <hr />
                        <h3> Employee Name: {this.details.ename}</h3><br />
                        <ClassB  details = {this.details}/> <br />
                        <hr />
                        <FunctionC  msg = {this.msg} />
                    </center>
                </div>
        )
    }
}
export default ClassA;