import React from 'react';
import { getNotes } from './actions/data'
class App extends React.Component {
    constructor(props) {
        super(props);
        getNotes();
        this.state = {
        };
    }
    
    componentDidMount(){
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

