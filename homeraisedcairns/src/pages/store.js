import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { puppyListReducer, puppyDetailsReducer, puppySaveReducer, puppyDeleteReducer} from '../reducers/puppyReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from '../reducers/userReducers';
import { depositReducer } from '../reducers/depositReducers.js';
import { reservationsListReducer } from '../reducers/reservationReducer';

const userInfo = Cookie.getJSON("userInfo") || null; 

const initialState= { userSignin: { userInfo } };
const reducer = combineReducers({
    puppyList: puppyListReducer,
    reservationList: reservationsListReducer,
    puppyDetails: puppyDetailsReducer,
    puppySave: puppySaveReducer,
    puppyDelete: puppyDeleteReducer,
    deposit: depositReducer,
    userSignin: userSigninReducer,
    userUpdate: userUpdateReducer,
    userRegister: userRegisterReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;