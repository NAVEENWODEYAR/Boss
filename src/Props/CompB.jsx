import React,{Component} from 'react';
import CompC from './CompC';

class CompB extends Component
{
    // sending the object to the functional component C
    name = "Test";
    sal = 852369;
    location = ["Kollam","Malapuram","Ernakulam","Kocheveli"];
    details = {age:25,education:"Masters",Email:"m@gmail.com"};
    render()
    {
        return (
            <div>
                <h2> Component B </h2>
                <h3> Hello,{this.props.name} welcome to {this.props.location} ----  {this.props.children}</h3>
                <hr />
                <hr />
                
                {/* <h4> Details : {JSON.stringify(this.details)}</h4> */}
                <CompC  Details={this.details}/>
            </div>
        );
    }
}
export default CompB;