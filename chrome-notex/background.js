
var TYPE_PUSH = 'PUSH';
var TYPE_REMOVE = 'REMOVE';
var TYPE_EDIT = 'EDIT';
var TYPE_LOGIN = 'LOGIN';
var TYPE_USERNAME = 'USERNAME';
var TYPE_REGISTER = 'REGISTER';
var TYPE_LOGOUT = 'LOGOUT';
var STATUS_OK = 1;
var STATUS_FAIL = 0;

var userId = null;
var gUsername = null;

function textParse(text) {
    return text.replace(/(^\s*)|(\s*$)/g, "");
}

function pushNote(text, title, url) {
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
    $.ajax({
        url:"http://localhost:8080/note/"+noteId,
        type: "DELETE",
        contentType: "application/json",
        success: function (data) {
            
        }
    })
}

function login(username,password,sendResponse) {
    console.log('login '+username+""+password);
    sendResponse(STATUS_OK);
    userId = "1";
    gUsername = username;
}

function register(username,password,rePassword,sendResponse) {
    console.log(username);
    sendResponse(STATUS_OK);
}

function logout(sendResponse) {
    gUsername = null;
    sendResponse(STATUS_OK);
}


function startListeners() {

    chrome.webRequest.onBeforeRequest.addListener(function (details) {
        var query = details.url.match(/.*wd=(.*?)[&$]/)[1];
        $.get("http://localhost:8080/query?userId=1&text="+query,function (notes) {
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