/**
 * Created by hard on 16-9-17.
 */

import React from 'react';
import { hashHistory } from 'react-router';
import {styles} from '../styles/styles';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <input type='hidden' id='J_AAC' defaultValue='0'/>
                <div className='menu' style={styles.height}>
                    <img className='logo' src='https://img.alicdn.com/tps/TB1kxcvMVXXXXaPaXXXXXXXXXXX-206-207.png'/>
                    <span className="iconfont icon-sousuo" onClick={()=>{hashHistory.push('/query.html')}}></span>
                </div>
            </div>

        );
    }
}

export default Navigation;