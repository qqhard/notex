/**
 * Created by hard on 16-8-27.
 */
import React from 'react';
import { browserHistory } from 'react-router';


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
                    <div className='iconfont icon-weidenglu'></div>
                    <div className='iconfont icon-tianjia'></div>
                    <div className='iconfont icon-sousuo'></div>
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
                        <div className='iconfont icon-yulan'></div>
                        <div className='iconfont icon-baocun'></div>
                    </div>
                    {/*<div>
                        <textarea></textarea>
                    </div>*/}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getNotes();
    }
}

let styles = {
    height: {
        height: document.documentElement.clientHeight || document.body.clientHeight
    }
}
export default NoteEditor;

