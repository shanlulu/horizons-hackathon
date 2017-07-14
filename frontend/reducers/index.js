import types from '../actions/types';
function rootReducer(state = {}, action) {
    switch (action.type) {
        case types.removeItem:
            return state.filter(item => item._id !== action.id);
        case types.fetch:
            return action.foodItemObj;
        default:
            return state;
    }
}

export default rootReducer;
