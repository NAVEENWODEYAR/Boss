// 1. create the action types.,
    let GM='GM'
    let GN='GN'

    let gmAction = () => {
        console.log("Step-2, ");
        return{type : GM};
    }
    
    let gnAction = () => {
        return{type : GN};
    }

    export {GM,GN,gmAction,gnAction};