/**
 * Created by hard on 16-8-31.
 */
import React from 'react';
import './dark.css';
import './defaultStyle.css';

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
        if(!!note){
            return marked(note.text);
        }
        return '';
    }

    render(){

        return (
            <div className='box'>
                <input type='hidden' id='J_AAC' defaultValue='0' />
                <div className='menu' style={styles.height}>
                    <img className='logo' src='https://img.alicdn.com/tps/TB1kxcvMVXXXXaPaXXXXXXXXXXX-206-207.png' />

                </div>
                <div className='content' dangerouslySetInnerHTML={{__html: this.noteHtml()}}>

                </div>
                <div className='yulan mdown none' id='J_Right'></div>
            </div>
        )
    }
}

export default NoteShow;