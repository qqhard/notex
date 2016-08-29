/**
 * Created by hard on 16-8-27.
 */
import React from 'react';
import { browserHistory } from 'react-router';
import styles from './defaultStyle';

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div style={styles.menu}>
                    <img style={styles.logo} src='https://img.alicdn.com/tps/TB1kxcvMVXXXXaPaXXXXXXXXXXX-206-207.png' />
                    <a href="javascript:;"></a>
                    <div className='iconfont icon-tianjia'></div>
                    <div className='iconfont icon-sousuo'></div>
                </div>
            </div>
        )
    }
}

export default NoteEditor;

