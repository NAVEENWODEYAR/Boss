import {createStore} from 'redux';
import { fnReducer } from './Function/function.reducer';
import{composeWithDevTools} from '@redux-devtools/extension';

let store = createStore(fnReducer,composeWithDevTools());

export {store};