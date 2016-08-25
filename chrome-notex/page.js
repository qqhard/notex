var TYPE_TXT = 'TXT';
var selection = null;
console.log("test");

function send(txt) {
    var message = {
        type: TYPE_TXT,
        value: txt
    };
    chrome.runtime.sendMessage(message);
}

function fun(val) {
    if(val < 10)return '0'+val;
    return val;
}

function timeFormat(time) {
    var now = new Date(time);
    var year = now.getFullYear();
    var month = fun(now.getMonth()+1);
    var date = fun(now.getDate());
    var hour = fun(now.getHours());
    var minute = fun(now.getMinutes());
    var second = fun(now.getSeconds());
    return   year+"年"+month+"月"+date+"日  "+hour+":"+minute+":"+second;
}



function htmlNote(note) {
    return $("\
        <div class='post-items'>\
            <div class='post-title'>\
                <a href='"+note.url+"' target='_blank'>"+note.title+"</a>\
            </div>\
            <div class='post-meta'>"+timeFormat(note.time)+"<span class='post-tags'><span>工具</span></span></div>\
            <div class='post-content'><p>"+note.text+"</p></div>\
            <p class='readmore'><a href='/2016/05/08/KeePassX/'>Read More...</a></p>\
        </div>\
    ");
}

function show(notes) {
    var newNodes = $("<div class='index'><h3>NoteX 笔记内容</h3></div>");
    for(var i=0;i<notes.length;i++){
        newNodes.append(htmlNote(notes[i]));
    }
    var content_left =  $("#content_left");
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

document.onkeydown = function()
{
    var oEvent = window.event;
    if (oEvent.keyCode == 67 && oEvent.ctrlKey) {
        if(selection != null){
            send(selection);
            selection = null;
        }
    }
}

