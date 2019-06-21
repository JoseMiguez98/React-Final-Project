import { combineReducers } from 'redux';
import { searchReducer } from './search';
import { layoutReducer } from './layout';
import { artistReducer } from './artist';
import { albumReducer } from './album';

export default combineReducers({
    layout: layoutReducer,
    search: searchReducer,
    artist: artistReducer,
    album: albumReducer
});