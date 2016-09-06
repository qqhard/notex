/**
 * Created by hard on 16-8-31.
 */
import React from 'react';
import './dark.css';
import './defaultStyle.css';
import marked from 'marked';
import './NoteShow.css';

let styles = {
    height: {
        height: document.documentElement.clientHeight || document.body.clientHeight + 'px'
    },
    heights: {
        height: (document.documentElement.clientHeight || document.body.clientHeight) - 100 + 'px'
    }
}

class NoteShow extends React.Component {
    componentDidMount(){
        var {getNote} = this.props;
        var {noteId} = this.props.params;
        getNote(noteId);

    }

    noteHtml(){
        var {note} = this.props;
        if(!!note && !!note.text){
            return marked(note.text);
        }
        return '';
    }

    noteTitle(){
        var {note} = this.props;
        if(!!note && !!note.title){
            return note.title;
        }

        return '';
    }

    componentDidUpdate(){
        var codeBlock = document.querySelectorAll('code');
        for(var i = codeBlock.length-1;i>=0;i--){
            hljs.highlightBlock(codeBlock[i].parentNode);
        }
    }

    render(){

        return (
            <div className='box'>
                <input type='hidden' id='J_AAC' defaultValue='0' />
                <div className='menu' style={styles.height}>
                    <img className='logo' src='https://img.alicdn.com/tps/TB1kxcvMVXXXXaPaXXXXXXXXXXX-206-207.png' />
                </div>
                <div className='content'>
                    <div className = 'note_show_title'>{this.noteTitle()}</div>
                    <div className = 'note_show_text' dangerouslySetInnerHTML={{__html: this.noteHtml()}}></div>
                </div>

            </div>
        )
    }
}

export default NoteShow;