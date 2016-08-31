/**
 * Created by hard on 16-8-27.
 */
import {combineReducers} from 'redux';
import note from './note';
import notes from './notes';
import edit from './edit';
import user from './user';

const notexApp = combineReducers({
    note,
    notes,
    edit,
    user
});

export default notexApp;
