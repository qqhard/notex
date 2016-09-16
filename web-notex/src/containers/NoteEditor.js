/**
 * Created by hard on 16-8-31.
 */
import {connect} from 'react-redux';
import NoteEditor from '../components/NoteEditor';
import {getNotes, getNote, postNote, putNote, deleteNote, searchNote} from '../actions/data';
import {editTitle, editText, addTag, removeTag} from '../actions/edit';

const mapStateToProps = (state) => {
    return {
        note: state.note,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNote: (noteId)=>dispatch(getNote(noteId)),
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
)(NoteEditor);
