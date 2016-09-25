/**
 * Created by hard on 16-9-17.
 */

import React from 'react';

const styles = {
    input: {
        fontSize: '45px',
    },
    div: {
        marginTop: '10px',
        width: '98%'
    }
}

class QueryInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    handleKeyDown(e) {
        console.log(e.keyCode);
        if (e.keyCode == 13) {
            this.refs.queryInput.blur();
            const {search, userId} = this.props;
            search(userId, this.state.text);
        }
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    render() {
        const {init} = this.props;
        return (
            <div className="note_query_input" style={init?{}:styles.div}>
                <input value={this.state.text}
                       style={init?{}:styles.input}
                       onChange={this.handleChange.bind(this)}
                       onKeyDown={this.handleKeyDown.bind(this)}
                       placeholder={"搜索笔记"}
                       ref="queryInput"/>
            </div>

        );
    }
}

export default QueryInput;