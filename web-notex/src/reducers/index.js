/**
 * Created by hard on 16-8-27.
 */
import {combineReducers} from 'redux';
import note from './note';
import notes from './notes';
import user from './user';

const notexApp = combineReducers({
    note,
    notes,
    user
});

export default notexApp;
