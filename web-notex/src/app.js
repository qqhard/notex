import React from 'react';
import * as urls from './constant/urls';
import { setUserId } from './actions/user';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    componentWillMount(){

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

}

export default App;

