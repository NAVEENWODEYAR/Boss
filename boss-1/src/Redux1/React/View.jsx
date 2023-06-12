import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {gmAction,gnAction} from '../Redux/Function/function.action';

let View = () => {

    let dispatch = useDispatch();

    let message = useSelector((state)=>{
        return state;
    })
        let gmHandler = () => {
            dispatch(gmAction());
        }

        let gnHandler = () => {
            dispatch(gnAction());
        }

    return(
        <>
            <pre>{JSON.stringify(message)}</pre>
            <button onClick={gmHandler} className="btn btn-primary mr-5"> Morning </button>
            <button onClick={gnHandler} className="btn btn-success" > Evening </button>
        </>
    );
}
export default View;