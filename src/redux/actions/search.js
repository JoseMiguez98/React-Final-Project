import { ADD_RESULT } from '../types';

const addResult = data => {
    return {
        type: ADD_RESULT,
        payload: {data}
    }
}

export { addResult };