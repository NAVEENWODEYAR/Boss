import React,{ useRef } from 'react';

let Reference = () =>{

    let btRef = useRef('');
    return(
        <>
            <form>
                <label> Email-Id* </label>
                <input type="text" placeholder="email-id" required/><br />
                <label> Password* </label>
                <input type="password" placeholder="password" required /><br />
                <input type="checkbox" onClick={(event)=>{btRef.current.disabled = !event.target.checked}} /> Please accept the terms & conditions <br />
                <input type="submit" ref={btRef} value="Login" disabled />
            
            </form>
        </>
    );
}
export default Reference;