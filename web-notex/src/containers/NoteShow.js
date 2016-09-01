/**
 * Created by hard on 16-8-31.
 */
import {connect} from 'react-redux';
import NoteShow from '../components/NoteShow';
import { getNote } from '../actions/data';

const mapStateToProps = (state) => {
    return {
        note: state.note,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNote: (noteId)=>dispatch(getNote(noteId)),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteShow);
