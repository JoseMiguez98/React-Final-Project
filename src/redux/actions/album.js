import { ADD_ALBUM_DATA } from '../types';

const addAlbumData = data => {
    return {
        type: ADD_ALBUM_DATA,
        payload: {data}
    }
}

export { addAlbumData };