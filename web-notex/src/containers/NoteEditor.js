/**
 * Created by hard on 16-8-27.
 */
import {connect} from 'react-redux';
import NoteEditor from '../components/NoteEditor';
import {getNotes, getNote, postNote, putNote, deleteNote} from '../actions/data';

const mapStateToProps = (state) => {
    return {
        notes: state.notes.notes,
        note: state.note.note,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNotes: ()=>dispatch(getNotes()),
        getNote: (noteId)=>dispatch(getNote(noteId)),
        postNote: (note)=>dispatch(postNote(note)),
        putNote: (note)=>dispatch(putNote(note)),
        deleteNote: (noteId)=>dispatch(deleteNote(noteId)),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteEditor);
