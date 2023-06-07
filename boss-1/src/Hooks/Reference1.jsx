import React,{useRef} from 'react';

let Reference1 = () => {

    let bRef = useRef('');
    return(
        <>
            <form>
                <label> Name* </label>
                <input type="text" placeholder='userName' required /> <br />
                <label> Password* </label>
                <input type="password" placeholder='password' required /><br />
                <input type="checkbox" onClick={(event)=>{bRef.current.disabled = event.target.disabled}} /> TC Apply <br />
                <input type="submit" disabled value="Submit" ref={bRef} />
            </form>
        </>
    );
}
export default Reference1;