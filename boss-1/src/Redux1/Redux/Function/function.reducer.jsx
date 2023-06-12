import {GM,GN} from './function.action';

let initialState = {msg:"No Message"};
let fnReducer = ( state = initialState, action) => {
    switch(action.type)
    {
        case 'GM':
            return({msg:"Enjoy your breakfast,,."});
        case 'GN':
            return({msg:"Enjoy your sleep,,."});
        default:
            return state;
    }
    
}
export {fnReducer};