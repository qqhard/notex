/**
 * Created by hard on 16-8-27.
 */

/**
 * 1.
 */

import React from 'react';
import './dark.css';
import './defaultStyle.css';


class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleChangeTitle(event) {
        this.props.editTitle(event.target.value);
    }
    handleChangeText(event) {
        this.props.editText(event.target.value);
    }

    componentWillReceiveProps(nextProps){
        eve.searchNote(nextProps);
        eve.addNote(nextProps);
    }

    title(){
        if(!!this.props.note){
            return this.props.note.title;
        }
        return '';
    }

    text(){
        if(!!this.props.note){
            return this.props.note.text;
        }
        return '';
    }

    render() {
        let list = [];
        if (!!this.props.notes){
            list = this.props.notes.map((val,index)=>{
                return (
                    <li className='list-li' key={index}>
                        <a href='javascript:;'>
                            <h3 className='name'>{val.title}</h3>
                            <p className='list-time'>{eve.timeFormat(val.time)}</p>
                            <p className='list-content'>{val.text}</p>
                            <div className='delete'>
                                <span className='iconfont icon-xiao10'></span>
                            </div>
                            <input id='J_NoteId' type='hidden' value={val.noteId}/>
                        </a>
                    </li>
                );
            });
        }

        let length = '';
        let userName = ''
        if (!!this.props.notes){
            length = this.props.notes.length;
        }

        if (!! this.props.user) {
            userName = this.props.user.username;
        }

        return (
            <div className='box'>
                <input type='hidden' id='J_AAC' defaultValue='0' />
                <div className='menu' style={styles.height}>
                    <img className='logo' src='https://img.alicdn.com/tps/TB1kxcvMVXXXXaPaXXXXXXXXXXX-206-207.png' />
                    <div>{userName}</div>
                    <div id='J_SearchInput' className='search none'>
                        <input className='search-input' placeholder="输入查询字段"/>
                    </div>
                </div>
                <div className='list' style={styles.height}>
                    <h2 className='list-title'>猿笔记</h2>
                    <a href='javascript:;' id='J_Search' className='ssh iconfont icon-sousuo'></a>
                    <p className='num'><span>{length}</span>条笔记</p>
                    <ul id='J_List' className='list-box'>
                        {list}
                    </ul>
                </div>
                <div className='content'>
                    <div className='md-head'>
                        <input id='J_Title' className='md-title'
                            type='text'
                            placeholder='请输入标题'
                            value={this.title()}
                            onChange={e=>this.handleChangeTitle(e)}
                        />
                        <a href='javascript:;' id='J_ShowMd' className='iconfont icon-yulan'></a>
                        <a href='javascript:;' onClick={()=>this.props.putNote(this.props.note)} className='iconfont icon-baocun'></a>
                    </div>
                    <textarea className='textarea' id='J_Mark' placeholder='请输入内容' style={styles.heights} value={this.text()}
                        onChange={e=>this.handleChangeText(e)}
                    ></textarea>
                </div>
                <div className='yulan mdown none' id='J_Right'></div>
            </div>
        )
    }
    componentDidMount() {
        eve.getNotes(this.props);
        eve.showMd();
        eve.translateMd();
        eve.showNote(this.props);
        eve.newNote(this.props);


        eve.deleteNote(this.props);
    }
}

let eve = {
    fun: function(val) {
        if (val < 10)return '0' + val;
        return val;
    },
    timeFormat: function(time) {
        var now = new Date(time);
        var year = now.getFullYear();
        var month = this.fun(now.getMonth() + 1);
        var date = this.fun(now.getDate());
        var hour = this.fun(now.getHours());
        var minute = this.fun(now.getMinutes());
        var second = this.fun(now.getSeconds());
        return year + "年" + month + "月" + date + "日  " + hour + ":" + minute + ":" + second;
    },
    showMd: function() {
        let _this = this;
        $('#J_ShowMd').click(function(e) {
            if($('#J_Right').hasClass('none')) {
                $('#J_Right').removeClass('none');
                $('#J_Right').addClass('block');
                const content = $('#J_Mark').val();
                let right = $('#J_Right');
                let hCon = marked(content);
                right.html(hCon);
                _this.highLightCode();
            } else {
                $('#J_Right').removeClass('block');
                $('#J_Right').addClass('none');
            }
        })
    },
    highLightCode: function() {
        var codeBlock =document.querySelectorAll('code');
        for(var i = codeBlock.length-1;i>=0;i--){
            hljs.highlightBlock(codeBlock[i].parentNode);
        }
    },
    translateMd: function() {
        let that = this;
        this.highLightCode();
        $('#J_Mark').keyup(function(e) {
            const content = $('#J_Mark').val();
            let right = $('#J_Right');
            let hCon = marked(content);
            right.html(hCon);
            that.highLightCode();
        })
    },
    getNotes: function(props) {
        props.getNotes();/////////
    },
    showNote: function(props) {
        let _this = this;
        $('#J_List').click(function(e) {
            let target = e.target.tagName.toLowerCase();
            let child = {};
            if(target === 'a') {
                child = e.target;
            } else if(target === 'p' || target === 'h3') {
                child = e.target.parentNode;
            } else if(target === 'li') {
                child = e.target.children[0];
            } else {
                return;
            }
            let title = child.children[0].innerHTML;
            let text = child.children[2].innerHTML;
            let noteId = child.children[4].value;
            props.getNote(noteId);
            const content = $('#J_Mark').val();
            let right = $('#J_Right');
            let hCon = marked(content);
            right.html(hCon);
            _this.highLightCode();
            $('#J_AAC').val(child.children[4].value);

        })
    },
    newNote: function(props) {
        $('#J_Add').click(function() {
            $('#J_AAC').val('1');
            $('#J_Title').val('');
            $('#J_Mark').val('');
            $('#J_Title').focus();
            props.editTitle("");
            props.editText("");
        });
    },
    addNote: function(props) {
        $('#J_Save').click(function() {
            if($('#J_AAC').val() === 1) {//增加
                let note = props.note;
                props.postNote(note);

            } else { //修改
                let note = props.note;
                console.log(note);
               // props.putNote(note);////
            }
        })
    },
    searchNote: function(props) {
        $('#J_Search').click(function() {
            $('#J_SearchInput').removeClass('none');
            $('#J_SearchInput').addClass('block');
        })
        $('#J_SearchInput').keydown(function(ev) {
            var ev=ev||window.event;
            if(ev.keyCode === 13) {
                console.log(props.user);
                console.log(ev.target.value);
                props.searchNote(props.user.userId,ev.target.value);
                $('#J_SearchInput').removeClass('block');
                $('#J_SearchInput').addClass('none');
            }
        })
    },
    deleteNote: function(props) {
        $('#J_List').click(function(e) {
            if(e.target.tagName.toLowerCase() === 'div') {
                let list = e.target.parentNode.parentNode;
                let note = e.target.nextSibling.value;
                props.deleteNote(note);
                $(list).remove();
            }
        });
    }
}

let styles = {
    height: {
        height: document.documentElement.clientHeight || document.body.clientHeight + 'px'
    },
    heights: {
        height: (document.documentElement.clientHeight || document.body.clientHeight) - 100 + 'px'
    }
}
export default NoteEditor;

