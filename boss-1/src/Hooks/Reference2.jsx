import React from 'react';

const Reference2 = () =>{

    let btRef = React.useRef('');
    return(
        <center>
            <form>
                E-Mail* <input type="text" required  style={{marginLeft:"20px"}}/><br /><br />
                Password* <input type="password"  style={{margin:"0px"}}/><br /><br />
                <input type="checkbox"  onChange={(e)=>{btRef.current.disabled = !e.target.checked}} style={{marginLeft:"50px"}} /> <br/> I accept all the terms & conditions ., <br />
                <input className='btn btn-success' type="submit" value="Login" disabled ref={btRef}  style={{marginLeft:"50px",width:"100px",borderRadius:"40px"}}/>
            </form>
        </center>
    );
}
export default Reference2;