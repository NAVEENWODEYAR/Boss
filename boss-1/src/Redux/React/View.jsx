import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import { gmAction, gnAction } from "../redux/message/message.action";


let View = () => {

    let dispatch = useDispatch();

    let message = useSelector ((state)=>{
        return state;
    })
        let gmHandler = () => {
            console.log("Step-1..,");
            dispatch(gmAction());
        }
        let gnHandler = () => {
            dispatch(gnAction());
        }

    return(
        <>
            <center>
                <div className="container" style={{margin:"120px"}}>
                    <h2> Redux </h2>
                    <hr />
                    <pre>{JSON.stringify(message)}</pre>
                    <hr />
                    <h2>Msg :{message.value}</h2>
                    <button onClick={gmHandler} className="btn btn-success mr-5"> Morning </button>
                    <button onClick={gnHandler} className="btn btn-primary mr-5" > Evening </button>
                </div>
            </center>
        </>
    );
}
export default View;