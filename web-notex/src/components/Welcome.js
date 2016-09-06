/**
 * Created by hard on 16-8-31.
 */
import React from 'react';
import './dark.css';
import './defaultStyle.css';
import { hashHistory } from 'react-router';

let styles = {
    height: {
        height: document.documentElement.clientHeight || document.body.clientHeight + 'px'
    },
    heights: {
        height: (document.documentElement.clientHeight || document.body.clientHeight) - 100 + 'px'
    }
}

class Welcome extends React.Component {
    componentDidMount(){
        setTimeout(()=>{
            hashHistory.push('/notes.html');
        },1000);
    }

    render(){

        return (
            <div className='box'>
                <input type='hidden' id='J_AAC' defaultValue='0' />
                <div className='menu' style={styles.height}>
                    <img className='logo' src='https://img.alicdn.com/tps/TB1kxcvMVXXXXaPaXXXXXXXXXXX-206-207.png' />

                </div>

                <div className='yulan mdown none' id='J_Right'></div>
            </div>
        )
    }
}

export default Welcome;