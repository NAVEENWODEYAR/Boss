
const FunctionB = (props) =>{

    return <div>
        <h2> Employee Name: {props.name}</h2>
        <hr />
        <h2> Employee Designation: {props.designation}</h2>
        <hr />  
        <h2> Working Location: {props.location[2]}</h2>
        <hr />
        <h3> Salary: {props.details.sal}</h3>
        <hr />
        <h4> Details :{JSON.stringify(props.details) }</h4>
        <hr />
    </div>
}
export default FunctionB;