// Form handling in react

import React,{useState} from 'react';

const Form1 = () => {

	let[name,setName] = useState(" ");
	const [pswd,setPswd] = useState(" ")


	return(
		<form>
			<h1> Login Here </h1>
			<hr/>
			<p> Entered Name = {name + pswd} </p>
			<pre> Password = {pswd + name} </pre>
			<hr/>
			<label> Name </label>
			 <input type="text" required onChange={(e) => setName(e.target.value)} /> <br /><br />
			 <label> Password </label>
			 <input type="password" required onChange = {(event) => setPswd(event.target.value)} />
			 <br/><button> Submit </button>
		</form>);
}
export default Form1;