import React from "react";

class ClassB extends React.Component
{
    render(props)
    {
        return(
                <div>
                    <h2> Component name: ClassB </h2>
                    <hr />
                    <h3> {JSON.stringify(this.props.details)}</h3><br />
                    <h3> Employee ID: {this.props.details.id}</h3><br />
                    <h3> Employee Salary: {this.props.details.sal}</h3><br />
                    <h3> Employee Designation: {this.props.details.designtion}</h3><br />
                    <h3> Working Locaion: {this.props.details.location}</h3><br />
                </div>
        )
    }
}
export default ClassB;