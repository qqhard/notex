var TYPE_PUSH = 'PUSH';
var TYPE_REMOVE = 'REMOVE';
var TYPE_EDIT = 'EDIT';
var selection = null;

function send(txt) {
    var message = {
        type: TYPE_PUSH,
        value: txt
    };
    chrome.runtime.sendMessage(message);
}

function fun(val) {
    if (val < 10)return '0' + val;
    return val;
}

function timeFormat(time) {
    var now = new Date(time);
    var year = now.getFullYear();
    var month = fun(now.getMonth() + 1);
    var date = fun(now.getDate());
    var hour = fun(now.getHours());
    var minute = fun(now.getMinutes());
    var second = fun(now.getSeconds());
    return year + "年" + month + "月" + date + "日  " + hour + ":" + minute + ":" + second;
}

function editNote(e) {
    console.log(e);
}

function removeNote(noteId) {
    console.log(noteId);
    var message = {
        type: TYPE_REMOVE,
        value: noteId
    };
    chrome.runtime.sendMessage(message,function (data) {
        document.getElementById(noteId).remove();
    });
}


document.addEventListener("click", function (e) {
    var target = e.target;
    var noteId = target.parentElement.getAttribute('noteId');
    console.log(target.className);
    if (/editNote/.test(target.className)) {
        editNote(noteId);
    } else if (/removeNote/.test(target.className)) {
        removeNote(noteId);
    }
});

function htmlNote(note) {
    return $("\
        <div class='post-items' id='" + note.noteId + "'>\
            <div class='post-title'>\
                <a href='" + note.url + "' target='_blank'>" + note.title + "</a>\
            </div>\
            <div class='post-meta'>" + timeFormat(note.time) + "<span class='post-tags'><span>工具</span></span></div>\
            <div class='post-content'><p>" + note.text + "</p></div>\
            <p class='readmore' noteId='" + note.noteId + "'>\
                <span class='editNote iconfont icon-xiugai'></span>\
                <span class='removeNote iconfont icon-xiao10'></span>\
                <span class='iconfont icon-shengxu'></span>\
                <span class='iconfont icon-jiangxu'></span>\
             </p>\
        </div>\
    ");
}

function show(notes) {
    $("#notex").remove();
    var newNodes = $("<div id='notex' class='index'></div>");
    for (var i = 0; i < notes.length; i++) {
        newNodes.append(htmlNote(notes[i]));
    }
    var content_left = $("#content_left");
    content_left.prepend(newNodes);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    show(message);
});

document.addEventListener("mouseup", function (e) {
    console.log(window.getSelection());
    var txt = window.getSelection().toString();
    if (txt.length > 1) {
        selection = txt;
    }
});

document.onkeydown = function () {
    var oEvent = window.event;
    if (oEvent.keyCode == 67 && oEvent.ctrlKey) {
        if (selection != null) {
            send(selection);
            selection = null;
        }
    }
}
