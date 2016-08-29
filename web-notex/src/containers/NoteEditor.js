/**
 * Created by hard on 16-8-27.
 */
import { connect } from 'react-redux';
import NoteEditor from '../components/NoteEditor';
import { getNotes } from '../actions/data';

const mapStateToProps = (state) => {
    return {
        notes: state.data.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNotes: ()=>dispatch(getNotes())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteEditor);
