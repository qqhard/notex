/**
 * Created by hard on 16-8-27.
 */
import { connect } from 'react-redux';
import NoteEditor from '../components/NoteEditor';


const mapStateToProps = (state) => {
    return {
        notes: state.data.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsername: ()=>dispatch(function () {

        })
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteEditor);
