import { TOGGLE_SEARCH } from '../types';

const initialState = {
    searchExpanded: false
};

const layoutReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_SEARCH:

        return {
            ...state, ...state.searchExpanded = !state.searchExpanded
        };
        default:
        return state;
    }
}

export { layoutReducer };