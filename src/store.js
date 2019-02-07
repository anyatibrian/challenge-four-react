// creating the store
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
const middleWare =[thunk];
const initialState ={};
const Store = createStore(rootReducer, initialState, applyMiddleware({...middleWare}));

// exporting the create store method
export default Store