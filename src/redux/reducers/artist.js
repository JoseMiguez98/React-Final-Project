import { ADD_DATA, ADD_ALBUMS } from '../types';

const initialState = {
    data: {},
    albums: null
}

const artistReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_DATA:

        return {
            ...state,
            data: action.payload.data
        }

        case ADD_ALBUMS:

        return {
            ...state,
            albums: action.payload.data
        }

        default:
        return state;
    }
}

export { artistReducer };