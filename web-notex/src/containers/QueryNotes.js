/**
 * Created by hard on 16-9-17.
 */

import {connect} from 'react-redux';
import QueryNotes from '../components/QueryNotes';
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
)(QueryNotes);
