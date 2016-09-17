/**
 * Created by hard on 16-9-17.
 */

import React from 'react';
import Navigation from './Navigation';
import QueryInput from './QueryInput';
import NoteList from './NoteList';
import '../styles/QueryNotes.css';

class QueryNotes extends React.Component {

    render() {
        return (
            <div className='box'>
                <Navigation />
                <div className='query_note_context'>
                    <QueryInput />
                    <div className="note_query_body">
                        <div className="note_query_box">
                            <NoteList />
                        </div>

                        <div className="query_note_right">rightright</div>
                    </div>
                </div>


            </div>
        );
    }
}

export default QueryNotes;