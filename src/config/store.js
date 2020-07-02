import { combineReducers, createStore } from 'redux';

import userReducer from '../reducers/UserReducer'

const AppReducers = combineReducers({
    userReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);

export default store;
