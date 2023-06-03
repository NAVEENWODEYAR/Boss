import React from 'react';

let Car = (props) => {
    return(
        <>
            <h2> Hooks were introduced in version-16.8 </h2>
            <hr />
            <h4> My Car color,{props.clr.color }</h4>
        </>
    );
}
export default Car;