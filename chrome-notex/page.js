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
    // console.log(e);
}

function removeNote(noteId) {
    // console.log(noteId);
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
    // console.log(target.className);
    if (/editNote/.test(target.className)) {
        editNote(noteId);
    } else if (/removeNote/.test(target.className)) {
        removeNote(noteId);
    }

});

function htmlNote(note) {
    var tags = note.tags.split(",") || [];
    var tool = '';
    if(tags.length > 0) {
        tags.map(function(item, index) {
            tool += "<span class='tags'>" + item + "</span>"
        });
    }
    return $("\
        <div class='post-items' id='" + note.noteId + "'>\
            <div class='post-title'>\
                <a href='" + note.url + "' target='_blank'>" + note.title + "</a>\
            </div>\
            <div class='post-meta'>" + timeFormat(note.time) + "<span class='post-tags'> ." + tool + "</span></div>\
            <div class='post-content'><p>" + note.text + "</p></div>\
            <p class='readmore' noteId='" + note.noteId + "'>\
                <a href='http://yuanbiji.com/' class='editNote iconfont icon-xiugai'></a>\
                <a href='javascript:;' class='removeNote iconfont icon-xiao10'></a>\
                <a href='javascript:;' class='iconfont icon-shengxu'></a>\
                <a href='javascript:;' class='iconfont icon-jiangxu'></a>\
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
    // console.log(window.getSelection());
    var txt = window.getSelection().toString();
    if (txt.length > 1) {
        selection = txt;
    }
});

document.onkeydown = function () {
    var oEvent = window.event;
    if (oEvent.keyCode == 67 && oEvent.shiftKey) {
        if (selection != null) {
            send(selection);
            var alert = $("\
            <div class='yuanbiji_alert_zz'>\
                <h3>您的选中已保存至猿笔记</h3>\
            </div>\
        ");
        $('body').append(alert);
            selection = null;
        }
    }
}
