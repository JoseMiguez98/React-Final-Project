import { ADD_ALBUM_DATA } from '../types';

const initialState = {
    data: {}
};

const albumReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ALBUM_DATA:

        return {
            ...state,
            data: action.payload.data
        }

        default:
        return state;
    }
}

export { albumReducer };