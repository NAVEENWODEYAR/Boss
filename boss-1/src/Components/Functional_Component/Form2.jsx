import React,{useState} from 'react';

let Form2 = () => {
	let[name,setName] = useState(" ");
	const[pswd,setPswd] = useState("");
	return(
		<form>
			<h2 style={{fontSize:"15rem"}}> Login here </h2>
			<br/>
			<center>
				<h1 style={{fontSize:"5rem"}}> Details Entered- {name + pswd}</h1>
				<label> Employee-Name </label>
				<input type="text" required onChange={(a)=> setName(a.target.value)}/><br/><br/>
				<label> Password* </label>
				<input style={{color:"green"}} type="password" placeholder="forget" onChange={(p)=> setPswd(p.target.value)}/>
				<br/> <button className="btn btn-warning ">Submit</button>
				<input type="reset" value="Reset" style={{color:"red",borderRadius:"10px",padding:"5px",width:"80px",margin:"10px"}}/>
			</center>
		</form>);
}
export default Form2;