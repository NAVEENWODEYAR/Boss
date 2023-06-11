import React, {useState} from 'react';
 
let App = () => {

    let[counter,setCounter] = useState(0);
    return(
        <>
            <center style={{color:"blue",margin:"200px",fontSize:"8rem",backgroundColor:"yellow"}}>
                <button onClick={()=>setCounter(counter-1)}>-</button> 
                <h2 style={{fontSize:"10rem"}}>{counter}</h2>
                <button onClick={()=>setCounter(counter+1)}>+</button>
            </center>
        </>
    );
}
export default App;