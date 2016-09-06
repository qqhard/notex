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
        let children = null;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth
            })
        }

        return (
            <div>
                {children}
            </div>
        );
    }

}

export default App;

