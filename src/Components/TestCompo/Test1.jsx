import React, { useState } from "react";
import Test from "./Test";

const Test1 = () =>{
    // useState
    const [name,setName] = useState("Naveen");
    
    let ch_Name = () =>{
        setName("Akshay");
    }

    return (
        <div>
            <h2  style={{color:"blue"}} onClick={ch_Name}> {name} <br></br></h2>
            <Test name={name} setName={setName}/>
        </div>
    );
}

export default Test1;