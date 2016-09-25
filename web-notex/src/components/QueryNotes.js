/**
 * Created by hard on 16-9-17.
 */

import React from 'react';
import Navigation from './Navigation';
import QueryInput from './QueryInput';
import NoteList from './NoteList';
import MarkdownEditor from './MarkdownEditor';
import '../styles/QueryNotes.css';

class QueryNotes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.userId = localStorage.getItem("user_id");
    }

    count() {
        if (!this.props.notes) return 0;
        return this.props.notes.length;
    }

    viewEditor() {
        const {note} = this.props;
        if (!!note && !!note.noteId) {
            return <MarkdownEditor {...this.props}/>;
        }
        return null;
    }

    render() {
        let init = true;
        if (!!this.props.query)init = false;
        let box = null;
        if (!!this.props.query) {
            box = (
                <div className="note_query_body">
                    <div className="note_query_box">
                        <div className="stat">{`找到${this.count()}篇笔记`}</div>
                        <NoteList notes={this.props.notes} getNote={this.props.getNote}/>
                    </div>

                    <div className="query_note_right">
                        {this.viewEditor()}
                    </div>
                </div>
            );
        }
        return (
            <div className='box'>
                <Navigation />
                <div className='query_note_context'>
                    <QueryInput init={init} search={this.props.searchNote} userId={this.userId}/>
                    {box}
                </div>
            </div>
        );
    }
}

export default QueryNotes;