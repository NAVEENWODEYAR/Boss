import React,{Component} from 'react';

class ClassD extends Component 
{
    render(props)
    {
        return (
                <div>
                    <h3> Iam an Class component </h3><br />
                    <h2> Hello : {this.props.msg}</h2>
                </div>
        );
    }

}
export default ClassD;