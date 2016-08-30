/**
 * Created by hard on 16-8-27.
 */
import {combineReducers} from 'redux';
import note from './note';
import notes from './notes';
import edit from './edit';


const notexApp = combineReducers({
    note,
    notes,
    edit
});

export default notexApp;
