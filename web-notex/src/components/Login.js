/**
 * Created by hard on 16-9-3.
 */

import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';

class Login extends React.Component {


    componentDidMount(){
        const { auth } = this.props;
        auth.login();
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

Login.propTypes = {
    auth : T.instanceOf(AuthService)
};

export default Login;