/**
 * Created by hard on 16-8-31.
 */
import React from 'react';
import './dark.css';
import './defaultStyle.css';
import './NoteEditor.css';

let styles = {
    height: {
        height: document.documentElement.clientHeight || document.body.clientHeight + 'px'
    },
    heights: {
        height: (document.documentElement.clientHeight || document.body.clientHeight) - 100 + 'px'
    },
    grey: {
        color: '#646464'
    },
    green: {
        color: '#2dbe60'
    },
    red: {
        color: 'red'
    }
}

const MODE = {
    EDIT: 0,
    YULAN: 1,
    change: function (old) {
        return old ^ 1;
    }
}

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: MODE.EDIT,
            dirty: false,
        }
    }

    componentDidMount() {
        var {getNote} = this.props;
        var {noteId} = this.props.params;
        getNote(noteId);
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
                    "Ctrl-S": function(cm) {
                        _this.handleSave.bind(_this)();
                    },
                    "Ctrl-A": function(cm) {
                        cm.execCommand("selectAll");
                    }
                };
                this.addKeyMap(keyMap);
                this.previewed();
            }
        });
    }

    noteHtml() {
        var {note} = this.props;
        if (!!note && !!note.text) {
            return marked(note.text);
        }
        return '';
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
        // this.editor.previewing(); //只显示html
    }

    handleSave() {
        let {note, putNote} = this.props;
        note.text = this.editor.getValue();
        putNote(note,()=>{
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

    render() {

        return (
            <div className='box'>
                <input type='hidden' id='J_AAC' defaultValue='0'/>
                <div className='menu' style={styles.height}>
                    <img className='logo' src='https://img.alicdn.com/tps/TB1kxcvMVXXXXaPaXXXXXXXXXXX-206-207.png'/>
                </div>
                <div className='content'>
                    <div className="note_editor_head">
                        <input className='note_editor_title' value={this.noteTitle()}
                               onChange={this.handleChangeTitle.bind(this)}/>
                        <div className="note_editor_utils">
                            <span className="note_editor_util iconfont icon-yulan" style={this.yulanStyle()}
                                  onClick={this.handleModeChange.bind(this)}></span>
                            <span className="note_editor_util iconfont icon-baocun" style={this.saveStyle()}
                                  onClick={this.handleSave.bind(this)}></span>
                            <span className="note_editor_util iconfont icon-xiao10"></span>
                        </div>
                    </div>
                    <div id="editormd" key="editormd">
                        <textarea style={{display: 'none'}} value={this.noteText()}></textarea>
                    </div>
                </div>

            </div>
        )
    }
}

export default NoteEditor;