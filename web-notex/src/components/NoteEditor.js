/**
 * Created by hard on 16-8-27.
 */
import React from 'react';
import { browserHistory } from 'react-router';
import './dark.css';
import './defaultStyle.css';


class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let list = [
            <li className='list-li' key='1'>
                <a href='javascript:;'>
                    <h3 className='name'>React 入门实例教程</h3>
                    <p className='list-time'>2016年08月27日 20:30:45</p>
                    <p className='list-content'>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                    <div className='delete'>
                        <span className='iconfont icon-xiao10'></span>
                    </div>
                </a>
            </li>,
            <li className='list-li' key='2'>
                <a href='javascript:;'>
                    <h3 className='name'>React 入门实例教程</h3>
                    <p className='list-time'>2016年08月27日 20:30:45</p>
                    <p className='list-content'>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                    <div className='delete'>
                        <span className='iconfont icon-xiao10'></span>
                    </div>
                </a>
            </li>,
            <li className='list-li' key='3'>
                <a href='javascript:;'>
                    <h3 className='name'>React 入门实例教程</h3>
                    <p className='list-time'>2016年08月27日 20:30:45</p>
                    <p className='list-content'>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                    <div className='delete'>
                        <span className='iconfont icon-xiao10'></span>
                    </div>
                </a>
            </li>,
            <li className='list-li' key='4'>
                <a href='javascript:;'>
                    <h3 className='name'>React 入门实例教程</h3>
                    <p className='list-time'>2016年08月27日 20:30:45</p>
                    <p className='list-content'>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                    <div className='delete'>
                        <span className='iconfont icon-xiao10'></span>
                    </div>
                </a>
            </li>,
            <li className='list-li' key='5'>
                <a href='javascript:;'>
                    <h3 className='name'>React 入门实例教程</h3>
                    <p className='list-time'>2016年08月27日 20:30:45</p>
                    <p className='list-content'>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                    <div className='delete'>
                        <span className='iconfont icon-xiao10'></span>
                    </div>
                </a>
            </li>,
            <li className='list-li' key='6'>
                <a href='javascript:;'>
                    <h3 className='name'>React 入门实例教程</h3>
                    <p className='list-time'>2016年08月27日 20:30:45</p>
                    <p className='list-content'>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                    <div className='delete'>
                        <span className='iconfont icon-xiao10'></span>
                    </div>
                </a>
            </li>,
            <li className='list-li' key='7'>
                <a href='javascript:;'>
                    <h3 className='name'>React 入门实例教程</h3>
                    <p className='list-time'>2016年08月27日 20:30:45</p>
                    <p className='list-content'>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                    <div className='delete'>
                        <span className='iconfont icon-xiao10'></span>
                    </div>
                </a>
            </li>,
            <li className='list-li' key='8'>
                <a href='javascript:;'>
                    <h3 className='name'>React 入门实例教程</h3>
                    <p className='list-time'>2016年08月27日 20:30:45</p>
                    <p className='list-content'>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                    <div className='delete'>
                        <span className='iconfont icon-xiao10'></span>
                    </div>
                </a>
            </li>,
            <li className='list-li' key='9'>
                <a href='javascript:;'>
                    <h3 className='name'>React 入门实例教程</h3>
                    <p className='list-time'>2016年08月27日 20:30:45</p>
                    <p className='list-content'>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                    <div className='delete'>
                        <span className='iconfont icon-xiao10'></span>
                    </div>
                </a>
            </li>,
            <li className='list-li' key='10'>
                <a href='javascript:;'>
                    <h3 className='name'>React 入门实例教程</h3>
                    <p className='list-time'>2016年08月27日 20:30:45</p>
                    <p className='list-content'>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                    <div className='delete'>
                        <span className='iconfont icon-xiao10'></span>
                    </div>
                </a>
            </li>
        ];
        return (
            <div className='box'>
                <div className='menu' style={styles.height}>
                    <img className='logo' src='https://img.alicdn.com/tps/TB1kxcvMVXXXXaPaXXXXXXXXXXX-206-207.png' />
                    <a href="javascript:;"></a>
                    <a href='javascript:;' className='iconfont icon-weidenglu'></a>
                    <a href='javascript:;' className='iconfont icon-tianjia'></a>
                    <a href='javascript:;' className='iconfont icon-sousuo'></a>
                </div>
                <div className='list' style={styles.height}>
                    <h2 className='list-title'>猿笔记</h2>
                    <p className='num'><span>3</span>条笔记</p>
                    <ul id='J_List' className='list-box'>
                        {list}
                    </ul>
                </div>
                <div className='content'>
                    <div className='md-head'>
                        <input className='md-title' />
                        <a href='javascript:;' id='J_ShowMd' className='iconfont icon-yulan'></a>
                        <a href='javascript:;' className='iconfont icon-baocun'></a>
                    </div>
                    <textarea className='textarea' id='J_Mark' style={styles.heights}></textarea>
                </div>
                <div className='yulan mdown none' id='J_Right'></div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getNotes();
        this.props.getNote("57c4c0590002860e65b2950a");
        var note = {
            url:'www.xiaoruo.com',
            title:'测试post',
            text:'hello world',
            tags: '',
            time: Date.parse(new Date()),
            userId: 100,
        }
        this.props.postNote(note);
        note.tags = '修改了';
        this.props.putNote(note);
        console.log(this.state.note);
        this.props.deleteNote("57c4c0590002860e65b2950a");
        eve.showMd();
        eve.translateMd();
    }
}

let eve = {
    showMd: function() {
        $('#J_ShowMd').click(function(e) {
            if($('#J_Right').hasClass('none')) {
                $('#J_Right').removeClass('none');
                $('#J_Right').addClass('block');
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
            console.log(right)
            right.html(hCon);
            that.highLightCode();
        })
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

