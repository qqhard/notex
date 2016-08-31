
var TYPE_PUSH = 'PUSH';
var TYPE_REMOVE = 'REMOVE';
var TYPE_EDIT = 'EDIT';
var TYPE_LOGIN = 'LOGIN';
var TYPE_USERNAME = 'USERNAME';
var TYPE_REGISTER = 'REGISTER';
var TYPE_LOGOUT = 'LOGOUT';
var STATUS_OK = 1;
var STATUS_FAIL = 0;
var PRE_URL = 'http://localhost:8080';

var userId = null;
var gUsername = null;

function textParse(text) {
    return text.replace(/(^\s*)|(\s*$)/g, "");
}

chrome.contextMenus.create({
    title:'增添笔记',
    contexts:['selection'],
    onclick:function(data,tab){
        if(data.selectionText!=null && data.selectionText.length > 0) {
            pushNote(data.selectionText, tab.title, tab.url);
        }
    }
});

function pushNote(text, title, url) {
    if(userId == null){
        console.log('用户未登陆！')
        return ;
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
        url:"http://localhost:8080/note",
        data: JSON.stringify(note),
        type: "POST",
        contentType: "application/json",
        success: function (data) {
            console.log(data);
        }
    })
}

function removeNote(noteId) {
    if(userId == null){
        console.log('用户未登陆！')
        return ;
    }
    $.ajax({
        url:"http://localhost:8080/note/"+noteId,
        type: "DELETE",
        contentType: "application/json",
        success: function (data) {
            
        }
    })
}

function login(username,password,sendResponse) {
    var user = {
        username: username,
        password: password,
    };
    $.ajax({
        url: PRE_URL+"/user/login",
        data:  JSON.stringify(user),
        type: "POST",
        contentType: "application/json",
        async: false,
        success: function (data) {
            console.log(data);
            userId = data.userId;
            gUsername = username;
            sendResponse(STATUS_OK);
        }
    });

}

function register(username,password,rePassword,sendResponse) {
    var user = {
        username: username,
        password: password,
        rePassword: rePassword,
    };
    $.ajax({
        url: PRE_URL+"/user/register",
        data:  JSON.stringify(user),
        type: "POST",
        contentType: "application/json",
        async: false,
        success: function (data) {
            sendResponse(STATUS_OK);
        }
    });
}

function logout(sendResponse) {
    gUsername = null;
    userId = null;
    sendResponse(STATUS_OK);
}


function startListeners() {

    chrome.webRequest.onBeforeRequest.addListener(function (details) {
        var query = details.url.match(/.*wd=(.*?)[&$]/)[1];
        $.get("http://localhost:8080/query?userId="+userId+"&text="+query,function (notes) {
            chrome.tabs.sendMessage(details.tabId, notes);
        });
    },{
        urls : ["*://www.baidu.com/*"],
        types : ["xmlhttprequest"],
    });


    chrome.runtime.onMessage.addListener(function (message,sender,sendResponse) {
        switch(message.type)
        {
            case TYPE_PUSH:
                pushNote(message.value, sender.tab.title, sender.tab.url);
                break;
            case TYPE_REMOVE:
                removeNote(message.value);
                break;
            case TYPE_EDIT:
                break;
            case TYPE_LOGIN:
                login(message.username,message.password,sendResponse);
                break;
            case TYPE_REGISTER:
                register(message.username,message.password,message.rePassword,sendResponse);
                break;
            case TYPE_USERNAME:
                sendResponse(gUsername);
                break;
            case TYPE_LOGOUT:
                logout(sendResponse);
                break;
            default:
                console.log('exception message:');
                console.log(message);
        }

    });
}

(function () {
    startListeners();
})();