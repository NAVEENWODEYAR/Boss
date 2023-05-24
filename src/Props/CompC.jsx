
let CompC = (props) =>{

    return(
        <div>
            <h5> Functional Component C </h5>
            <h6> Angry Young Man -- <strong>{props.name}</strong></h6>
            <h7>{props.children} </h7>
            <br />
            <hr />
            <h3> {JSON.stringify(props.Details)}</h3>
        </div>
    );
}
export default CompC;