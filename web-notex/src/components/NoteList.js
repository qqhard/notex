/**
 * Created by hard on 16-9-17.
 */

import React from 'react';
import NoteNode from './NoteNode';


class NoteList extends React.Component {

    mock() {
        let notes = [];
        for (let i = 0; i < 20; i++) {
            notes.push(
                <NoteNode key={i} title="test" text="testtesttest"/>
            );
        }
        return notes;
    }

    notes() {
        let notes = [];
        notes = this.props.notes.map((val, index)=> {
            return (
                <NoteNode key={index} note={val} getNote={this.props.getNote}/>
            );
        });
        return notes;
    }

    render() {
        return (
            <div className="note_query_list">
                {this.notes()}
            </div>
        );
    }
}

export default NoteList;