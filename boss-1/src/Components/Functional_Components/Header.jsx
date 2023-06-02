import React,{useState} from 'react';

const Header = () => {
	let [msg,setMsg] = useState("useState is an hook");
	let [num,setNum] = useState(2);
	let [emp,setEmp] = useState(["Annie","Bella","Clara","Dolly"]);

		
	return (
		<>
			<h1> Functional Component </h1>
			<hr/>
			<pre> {msg}</pre>
			<button onClick={()=> {setMsg("USESTATE")}}> Click </button>
			<hr/>
			<p>{num} </p>
			<button onClick={()=> {setNum(num*num)}}> Square </button>
			<hr/>
			<h3> {emp},  Array </h3>
		</>
		);
}
export default Header;