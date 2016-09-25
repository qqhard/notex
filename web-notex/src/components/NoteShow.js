/**
 * Created by hard on 16-8-31.
 */
import React from 'react';
import './../styles/dark.css';
import './../styles/defaultStyle.css';
import './../styles/NoteShow.css';
import {hashHistory} from 'react-router';
import Navigation from './Navigation';

let styles = {
    height: {
        height: document.documentElement.clientHeight || document.body.clientHeight + 'px'
    },
    heights: {
        height: (document.documentElement.clientHeight || document.body.clientHeight) - 100 + 'px'
    }
}

class NoteShow extends React.Component {
    componentDidMount() {
        var {getNote} = this.props;
        var {noteId} = this.props.params;
        getNote(noteId);
        let _this = this;
        this.editor = editormd("editormd-view", {
            path: "/bower_components/editor.md/lib/",
            width: "90%",
            height: "88%",
            tex: true,
            watch: false,
            taskList: true,
            codeFold: true,
            toolbar: false,
            readOnly: true,
            onload: function () {
                this.previewing();
            }
        });

    }

    noteText() {
        var {note} = this.props;
        if (!!note)return note.text;
        return '';
    }

    noteTitle() {
        var {note} = this.props;
        if (!!note && !!note.title) {
            return note.title;
        }
        return '';
    }


    handleClickEdit() {
        let {note}= this.props;
        hashHistory.push(`/noteEditor-${note.noteId}.html`);
    }

    render() {

        return (
            <div className='box'>
                <Navigation />
                <div className='content'>
                    <div className="note_show_head">
                        <div className='note_show_title'>{this.noteTitle()}</div>
                        <div className="note_show_utils">
                            <span className="note_show_util iconfont icon-xiugai"
                                  onClick={this.handleClickEdit.bind(this)}>
                            </span>
                            <span className="note_show_util iconfont icon-xiao10">
                            </span>
                        </div>
                    </div>

                    <div id="editormd-view" key="editormd-view">
                        <textarea style={{display: 'none'}} value={this.noteText()}></textarea>
                    </div>
                </div>

            </div>
        )
    }
}

export default NoteShow;