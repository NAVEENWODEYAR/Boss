import React from "react";
import View from "./View";
import { Provider } from "react-redux";
import {store} from '../Redux/Store';

let App = () =>{

    return(
        <>
        <Provider store={store}>
            <center>
                <h2> Redux- state management tool..,</h2>
                <hr />
                <View/>
            </center>
        </Provider>
        </>
    );
}
export default App;