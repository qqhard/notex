/**
 * Created by hard on 16-9-17.
 */

import {connect} from 'react-redux';
import QueryNotes from '../components/QueryNotes';
import {getNote, searchNote, putNote} from '../actions/data';
import {editTitle, editText, addTag, removeTag} from '../actions/edit';

const mapStateToProps = (state) => {
    return {
        note: state.note,
        query: state.query.query,
        notes: state.notes.notes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNote: (noteId)=>dispatch(getNote(noteId)),
        searchNote: (userId,text)=>dispatch(searchNote(userId,text)),
        editTitle: (title)=>dispatch(editTitle(title)),
        editText: (text)=>dispatch(editText(text)),
        putNote: (note, callBack)=>dispatch(putNote(note, callBack)),
        addTag: (tag)=>dispatch(addTag(tag)),
        removeTag: (index)=>dispatch(removeTag(index)),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QueryNotes);
