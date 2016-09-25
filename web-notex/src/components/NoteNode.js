/**
 * Created by hard on 16-9-17.
 */

import React from 'react';


class NoteNode extends React.Component {

    fun(val) {
        if (val < 10)return '0' + val;
        return val;
    }

    timeFormat(time) {
        var now = new Date(time);
        var year = now.getFullYear();
        var month = this.fun(now.getMonth() + 1);
        var date = this.fun(now.getDate());
        var hour = this.fun(now.getHours());
        var minute = this.fun(now.getMinutes());
        var second = this.fun(now.getSeconds());
        return year + "年" + month + "月" + date + "日  " + hour + ":" + minute + ":" + second;
    }

    render() {
        const {note, getNote} = this.props;
        return (
            <div className="note_query_list_node" onClick={()=>{getNote(note.noteId)}}>
                <h3 className="title">{note.title}</h3>
                <div className="time">{this.timeFormat(note.time)}</div>
                <div className="text">{note.text}</div>
                <div className="border"></div>
            </div>
        );
    }
}

export default NoteNode;