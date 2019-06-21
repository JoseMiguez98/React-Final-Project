import { ADD_DATA, ADD_ALBUMS } from '../types';

const addData = data => {
    return {
        type: ADD_DATA,
        payload: {data}
    }
}

const addAlbums = data => {
    return {
        type: ADD_ALBUMS,
        payload: {data}
    }
};

export { addData, addAlbums }