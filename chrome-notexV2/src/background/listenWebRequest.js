/**
 * Created by hard on 16-9-4.
 */
import * as types from '../types';
import { getUserId } from './storage';
var $ = require('jquery');

export default function listenWebRequest() {
    chrome.webRequest.onBeforeRequest.addListener(function (details) {
        var query = details.url.match(/.*wd=(.*?)[&$]/)[1];
        $.get(types.PRE_URL+"/query?userId="+getUserId()+"&text="+query,function (notes) {
            chrome.tabs.sendMessage(details.tabId, {
                type: types.TYPE_GET_NOTES,
                notes: notes,
            });
        });
    },{
        urls : ["*://www.baidu.com/*"],
        types : ["xmlhttprequest"],
    });
}