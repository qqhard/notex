import React from 'react';
import * as urls from './../constant/urls';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    componentWillMount(){
        this.props.getUser();
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

