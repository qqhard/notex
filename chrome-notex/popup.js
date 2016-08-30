
var TYPE_LOGIN = 'LOGIN';
var TYPE_REGISTER = 'REGISTER';
var TYPE_USERNAME = 'USERNAME';
var TYPE_LOGOUT = 'LOGOUT';
var STATUS_OK = 1;
var STATUS_FAIL = 0;

function viewLogin() {//登陆
    document.getElementById("view").innerHTML = "\
        <form>\
            <img class='logo' src='images/logo.png' />\
            <p>\
                <label for=\"username\">用户名:</label>\
                <input id=\"username\" name=\"username\" type=\"text\">\
            </p>\
            <p>\
                <label for=\"password\">密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>\
                <input id=\"password\" name=\"password\" type=\"password\">\
            </p>\
            <input class='button' id='bLogin' type=\"button\" value=\"登陆\">\
            <a href='javascript:;' class='link' id='aRegister'>注册</a>\
        </form>\
    ";
}

function viewRegister() {
    document.getElementById("view").innerHTML = "\
        <form>\
            <img class='logo' src='images/logo.png' />\
            <p>\
                <label for=\"username\">用&nbsp;&nbsp;户&nbsp;&nbsp;名:</label>\
                <input id=\"username\" name=\"username\" type=\"text\">\
            </p>\
            <p>\
                <label for=\"password\">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</label>\
                <input id=\"password\" name=\"password\" type=\"password\">\
            </p>\
            <p>\
                <label for=\"rePassword\">再次输入:</label>\
                <input id=\"rePassword\" name=\"rePassword\" type=\"password\">\
            </p>\
            <input class='button' id='bRegister' type=\"button\" value=\"注册\">\
            <a href='javascript:;' class='link' id='aLogin'>登录</a>\
        </form>\
    ";
}


function viewUser(username) {
    document.getElementById("view").innerHTML = "\
        <div class='user'>\
            <img class='logo' src='images/logo.png' />\
            <h3>用户"+username+"已登陆</h3> \
            <input class='button' id='bLogout' type=\"button\" value=\"注销\">\ \
        </div>\
    ";
}

function viewText(text) {
    document.getElementById("view").innerHTML = "\
        <div>\
            <img class='logo' src='images/logo.png' />\
            <h3>"+text+"</h3> \
        </div>\
    ";
}

function login(username,password) {
    chrome.runtime.sendMessage({
        type: TYPE_LOGIN,
        username: username,
        password: password
    },function(data){
        if(data === STATUS_OK){
            viewUser(username);
        }else{

        }
    });
}

function register(username,password,rePassword) {
    chrome.runtime.sendMessage({
        type: TYPE_REGISTER,
        username: username,
        password: password,
        rePassword: rePassword
    },function(data){
        if (data === STATUS_OK){
            viewText('注册成功，1s后跳转');
            setTimeout(function () {
                viewLogin();
            },1000);
        }
    });
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
    },function(username){
        if(!!username){
            viewUser(username);
        }else{
            viewLogin();
        }
    });
})();