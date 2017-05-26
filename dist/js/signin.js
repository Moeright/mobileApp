var signin = (function() {
    var denglu = document.getElementById('denglu');
    var username = document.getElementById('username1');
    var password = document.getElementById('password1');
    var showH = document.getElementById('showH'); //这是显示隐藏密码
    var autoLogin = document.getElementById('autoLogin');
    return {
        init: function() {
            this.showHide();
            this.bindEvent();
        },

        showHide: function() {
            showH.onclick = function() {
                if (showH.checked) {
                    password.type = "text";
                    console.log(1)
                } else {
                    password.type = "password";
                    console.log(2)
                }
            }
        },
        bindEvent: function() {
            denglu.onclick = function() {
                    $.get('http://datainfo.duapp.com/shopdata/userinfo.php', { status: 'login', userID: username.value, password: password.value }, function(data) {
                        console.log(data)
                    })
                },
                autoLogin.onclick = function() {
                    console.log(this.checked)
                }
        }

    }
})()
signin.init();