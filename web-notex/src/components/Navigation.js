/**
 * Created by hard on 16-9-17.
 */

import React from 'react';

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

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <input type='hidden' id='J_AAC' defaultValue='0'/>
                <div className='menu' style={styles.height}>
                    <img className='logo' src='https://img.alicdn.com/tps/TB1kxcvMVXXXXaPaXXXXXXXXXXX-206-207.png'/>
                    <span className="iconfont icon-sousuo"></span>
                </div>
            </div>

        );
    }
}

export default Navigation;