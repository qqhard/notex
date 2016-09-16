/**
 * Created by hard on 16-8-27.
 */
import {connect} from 'react-redux';
import Home from '../components/Home';
import {getNotes, getNote, postNote, putNote, deleteNote, searchNote} from '../actions/data';
import { editTitle, editText } from '../actions/edit';

const mapStateToProps = (state) => {
    return {
        notes: state.notes.notes,
        note: state.note,
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNotes: (userId)=>dispatch(getNotes(userId)),
        getNote: (noteId)=>dispatch(getNote(noteId)),
        postNote: (note)=>dispatch(postNote(note)),
        putNote: (note)=>dispatch(putNote(note)),
        deleteNote: (noteId)=>dispatch(deleteNote(noteId)),
        editTitle: (title)=>dispatch(editTitle(title)),
        editText: (text)=>dispatch(editText(text)),
        searchNote: (userId,text)=>dispatch(searchNote(userId, text)),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
