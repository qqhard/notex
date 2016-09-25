/**
 * Created by hard on 16-9-25.
 */

import React from 'react';
import TagInput from './TagInput';
import {styles} from '../styles/styles';

const MODE = {
    EDIT: 0,
    YULAN: 1,
    change: function (old) {
        return old ^ 1;
    }
}

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: MODE.EDIT,
            dirty: false,
            open: false,
        }
    }

    componentDidMount() {
        let _this = this;
        this.editor = editormd("editormd", {
            path: "/bower_components/editor.md/lib/",
            width: "90%",
            height: "88%",
            tex: true,
            watch: false,
            taskList: true,
            codeFold: true,
            toolbar: false,
            readOnly: false,
            onload: function () {
                this.cm.on('change', function () {
                    _this.setState({dirty: true});
                });
                var keyMap = {
                    "Ctrl-S": function (cm) {
                        _this.handleSave.bind(_this)();
                    },
                    "Ctrl-A": function (cm) {
                        cm.execCommand("selectAll");
                    }
                };
                this.addKeyMap(keyMap);
                this.previewed();
            },
            markdown: this.props.note.text,
        });
    }

    componentWillReceiveProps(nextProps){
        if(this.props.note.noteId != nextProps.note.noteId ){
            if(!!this.editor)this.editor.setMarkdown(nextProps.note.text);
        }
    }


    noteText() {
        var {note} = this.props;
        if (!!note)return note.text;
        return '';
    }

    noteHtml() {
        let {note} = this.props;
        if (!!note && !!note.text) {
            return marked(note.text);
        }
        return '';
    }

    noteText() {
        let {note} = this.props;
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

    handleChangeTitle(e) {
        let val = e.target.value;
        this.props.editTitle(val);
        this.setState({dirty: true});
    }


    handleModeChange() {

        if (!!this.editor) {
            if (this.state.mode == MODE.YULAN) {
                this.editor.unwatch();

            } else {
                this.editor.watch();
            }
        }
        this.setState({
            mode: MODE.change(this.state.mode)
        })
    }

    handleSave() {
        let {note, putNote} = this.props;
        note.text = this.editor.getValue();
        putNote(note, ()=> {
            this.setState({
                dirty: false
            });
        });

    }

    yulanStyle() {
        if (this.state.mode == MODE.YULAN) {
            return styles.green;
        } else if (this.state.mode == MODE.EDIT) {
            return styles.grey;
        }
    }

    saveStyle() {
        if (this.state.dirty) {
            return styles.red;
        } else {
            return styles.grey;
        }
    }

    openModal(){
        console.log('test');
        this.setState({open:true});
    }

    render(){

        return (
            <div className="note_editor">
                <div className="note_editor_head">
                    <input className='note_editor_title' value={this.noteTitle()}
                           onChange={this.handleChangeTitle.bind(this)}/>
                    <div className="note_editor_neck">
                        <div className="note_editor_tags">
                            <TagInput
                                tags={!!this.props.note?this.props.note.tags:''}
                                addTag={this.props.addTag}
                                removeTag={this.props.removeTag}
                            />
                        </div>
                        <div className="note_editor_utils">
                                <span className="note_editor_util iconfont icon-yulan" style={this.yulanStyle()}
                                      onClick={this.handleModeChange.bind(this)}></span>
                                <span className="note_editor_util iconfont icon-baocun" style={this.saveStyle()}
                                      onClick={this.handleSave.bind(this)}></span>
                                <span className="note_editor_util iconfont icon-xiao10"
                                      onClick={this.openModal.bind(this)}></span>
                        </div>
                    </div>

                </div>
                <div id="editormd" key="editormd">
                    <textarea style={{display: 'none'}} ></textarea>
                </div>
            </div>
        );
    }

}

export default MarkdownEditor;