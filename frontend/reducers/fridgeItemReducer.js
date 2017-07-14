import types from '../actions/types';

const fridgeItemReducer = (state = {}, action) => {
    switch (action.type) {
        case types.fetch:
            return action.foodItemObj;
        default:
            return state;
    }
}

export default fridgeItemReducer;
