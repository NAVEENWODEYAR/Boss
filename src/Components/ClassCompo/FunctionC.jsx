import ClassD from "./ClassD";

const FunctionC = (props) => {

    return(
            <div>
                <h1> Functional Component C</h1><br />
                <h2> Message from ClassA : {props.msg}</h2>
                <hr />
                <ClassD msg  = {"Happy Coding"}/>
            </div>
    )
}
export default FunctionC;