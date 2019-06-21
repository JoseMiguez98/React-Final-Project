import { ADD_RESULT } from '../types';

const initialState = {
    data: null
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESULT:
        console.log(action.payload.data);
        return {
            ...state,
            data: action.payload.data
        }
        default:
        return state;
    }
}

export { searchReducer };