var registor = (function() {
    var zhuce = document.getElementById('zhuce');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var password1 = document.getElementById('passwordTrue');
    return {
        init: function() {
            this.getData();
        },
        getData: function() {

            zhuce.onclick = function() {
                console.log(username.value)
                console.log(password.value)
                console.log(password1.value)
                var a = username.value;
                var b = password.value;
                var c = password1.value;

                //判断注册的密码上下两个是否相同
                if (b == c) {
                    $.get("http://datainfo.duapp.com/shopdata/userinfo.php", { status: 'register', userID: username.value, password: password.value }, function(data) {
                        console.log(data)
                    })
                }


            }
        }
    }
})()
registor.init();