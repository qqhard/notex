/**
 * Created by hard on 16-9-17.
 */

import React from 'react';
import NoteNode from './NoteNode';


class NoteList extends React.Component {

    mock(){
        let notes = [];
        for(let i=0;i<20;i++){
            notes.push(
                <NoteNode title="test" text="testtesttest"/>
            );
        }
        return notes;
    }

    render(){
        return (
            <div className="note_query_list">
                {this.mock()}
            </div>
        );
    }
}

export default NoteList;