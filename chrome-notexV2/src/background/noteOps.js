var $ = require('jquery');
import { getUserId } from './storage';
import * as types from '../types';

function textParse(text) {
    return text.replace(/(^\s*)|(\s*$)/g, "");
}

function pushNoteSuccess(tabId) {
    chrome.tabs.sendMessage(tabId, {
        type: types.TYPE_PUSH_NOTE_SUCCESS,
    });
}

export function pushNote(text, tabId, title, url) {
    let userId = getUserId();
    if (!userId) {
        return;
    }
    var note = {
        userId: userId,
        text: textParse(text),
        url: url,
        title: title,
        tags: "",
        time: Date.parse(new Date()),
    };

    $.ajax({
        url: types.PRE_URL + "/note",
        data: JSON.stringify(note),
        type: "POST",
        contentType: "application/json",
        success: function (data) {
            pushNoteSuccess(tabId);
        }
    });
}

export function removeNote(noteId) {
    let userId = getUserId();
    if (!userId) {
        console.log('用户未登陆！')
        return;
    }

    $.ajax({
        url: types.PRE_URL + "/note/" + noteId,
        type: "DELETE",
        contentType: "application/json",
        success: function (data) {

        }
    })
}