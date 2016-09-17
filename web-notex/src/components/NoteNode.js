/**
 * Created by hard on 16-9-17.
 */

import React from 'react';


class NoteNode extends React.Component {

    render() {
        const {title, text} = this.props;
        return (
            <div className="note_query_list_node">
                <h3 className="title">{title}</h3>
                <div className="text">{text}</div>
                <div className="border"></div>
            </div>
        );
    }
}

export default NoteNode;