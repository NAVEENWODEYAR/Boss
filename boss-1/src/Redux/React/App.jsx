
import React from "react";
import{store} from '../redux/store';
import { Provider } from 'react-redux';
import View from "./View";

let App = () => {

    return(
        <>
            <Provider store={store}>
            <View/>
            </Provider>
        </>
    );
}
export default App;