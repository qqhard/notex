/**
 * Created by hard on 16-9-4.
 */
var $ = require('jquery');
import * as types from '../types';
import {setToken, getToken, setProfile, getNickName, getUserId} from './storage';
import { pushNote, removeNote } from './noteOps';





export default function listenMessage() {
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        switch (message.type) {
            case types.TYPE_PUSH:
                pushNote(message.value, sender.tab.id, sender.tab.title, sender.tab.url);
                break;
            case types.TYPE_REMOVE:
                removeNote(message.value);
                break;
            case types.TYPE_USERINFO:
                setToken(message.id_token);
                setProfile(message.profile);
                break;
            case types.TYPE_USERNAME:
                sendResponse({
                    'userId': getUserId(),
                    'nickname': getNickName()
                });
                break;
            default:
                console.log('exception message:');
                console.log(message);
        }

    });
}