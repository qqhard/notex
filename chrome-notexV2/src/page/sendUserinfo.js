/**
 * Created by hard on 16-9-4.
 */

import * as types from '../types';


export default function sendUserinfo() {
    // chrome.runtime.sendMessage()
    console.log('test');
    console.log(localStorage.getItem('id_token'));
    console.log(localStorage.getItem('profile'));
    console.log(types.TYPE_USERINFO);
    chrome.runtime.sendMessage({
        type: types.TYPE_USERINFO,
        id_token: localStorage.getItem('id_token'),
        profile: JSON.parse(localStorage.getItem('profile'))
    })
    console.log('test');

}