var $ = require('jquery');
var TYPE_LOGIN = 'LOGIN';
var TYPE_REGISTER = 'REGISTER';
var TYPE_USERNAME = 'USERNAME';
var TYPE_LOGOUT = 'LOGOUT';
var STATUS_OK = 1;
var STATUS_FAIL = 0;

function viewLogin() {//登陆
    document.getElementById("view").innerHTML = `
        <div class='user'>
            <img class='logo' src='images/logo.png'/>
            <h3>用户未登陆</h3> 
            <a class='button' href='http://yuanbiji.com/#/login.html' target='_blank'>前去登录</a>
        </div>
    `;
}

function viewUser(username) {
    document.getElementById("view").innerHTML = `
        <div class='user'>
            <img class='logo' src='images/logo.png'/>
            <h3>用户${username}已登陆</h3> 
            <a class='button' href='http://yuanbiji.com/#/notes.html' target='_blank'>web端</a>
        </div>
    `;
}

function viewText(text) {
    document.getElementById("view").innerHTML = "\
        <div>\
            <img class='logo' src='images/logo.png' />\
            <h3>"+text+"</h3> \
        </div>\
    ";
}

function logout() {
    chrome.runtime.sendMessage({
        type: TYPE_LOGOUT,
    },function(data){
        if(data === STATUS_OK){
            viewLogin();
        }else{

        }
    });
}

document.addEventListener("click", function (e) {
    var id = e.target.id;
    if(id === 'bLogin'){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        login(username,password);
    }else if(id === 'bRegister'){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var rePassword = document.getElementById('rePassword').value;
        if(password !=  rePassword){
            viewText('两次输入密码不一致');
            return ;
        }
        register(username, password, rePassword);
    }else if(id === 'bLogout'){
        logout();
    }else if(id === 'aRegister'){
        viewRegister();
    }else if(id === 'aLogin'){
        viewLogin();
    }
});


(function () {
    chrome.runtime.sendMessage({
        type: TYPE_USERNAME,
    },function (data) {
        console.log(data);
        if(!!data && !!data.nickname){
            viewUser(data.nickname);
        }else{
            viewLogin();
        }
    });
})();
