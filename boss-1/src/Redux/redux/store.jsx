
import {createStore} from 'redux';
import { msgReducer } from './message/message.reducer';
import {composeWithDevTools} from '@redux-devtools/extension';

let store = createStore(msgReducer,composeWithDevTools);

export {store};