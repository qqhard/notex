/**
 * Created by hard on 16-8-31.
 */
import {connect} from 'react-redux';
import App from '../components/App';
import { getUser } from './../actions/user';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: ()=>dispatch(getUser()),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
