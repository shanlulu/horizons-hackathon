import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import fridgeItemReducer from './fridgeItemReducer';
import templateReducer from './templateReducer';
// import ifOpenReducer from './ifOpenReducer';

const rootReducer = combineReducers({
    fridgeItem: fridgeItemReducer,
    template: templateReducer,
    routing: routerReducer
});

export default rootReducer;
