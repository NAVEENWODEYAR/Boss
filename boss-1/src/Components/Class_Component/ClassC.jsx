

const ClassC = (props) => {

	return(
		<>
			<h2> Functional Component </h2>
			<hr />
			<pre> Employee Details = {JSON.stringify(props.test)} </pre>
			<hr/>
			<h2> Name = {props.test.e_Name} </h2>
		</>
		);
}
export default ClassC;	