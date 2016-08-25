
var TYPE_TXT = 'TXT';
var userId = "1";

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
            case TYPE_TXT:
                pushNote(message.value, sender.tab.title, sender.tab.url);
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