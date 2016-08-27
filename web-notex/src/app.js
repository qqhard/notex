import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    componentDidMount(){
    }

    render() {
        return (
            <div>
                hello world
                {this.props.children}
            </div>
        );
    }

}

export default App;

