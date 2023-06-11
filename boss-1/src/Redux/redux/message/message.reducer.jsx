
import {GM,GN} from './message.action';
let initialstate={msg:"Idiot..,"};

let msgReducer = (state=initialstate, action) => {
    console.log("Step-3..,");

    switch(action.type)
    {
        case 'GM':
            return {msg:"Good Morning, enjoy breakfast,,."};

        case 'GN':
            return {msg:"Good night, enjoy the dinner,,."};

        default :
            return state;
    }
}

export {msgReducer};