(function () {
    layui.use(['layer', 'form'], function () {
        var layer = layui.layer;
        var form = layui.form;
        var $ = layui.jquery;

        //监控登陆
        form.on('submit(login)', function (data) {
            var obj = data.field;
            if (obj.username == 'admin' && obj.userpassword == '123456') {
                window.location.href = './save.html';
            } else {
                layer.msg('账号或密码不正确', {
                    icon: 5,
                    offset: ['300px', '810px']
                })
            }
        });


        //监控注册
        form.on('submit(register)', function (data) {
            layer.open({
                title: "用户注册",
                type: 2,
                content: $('#register-layer').html(),
                area: ['400px', '250px']
            });
        });


        //更新渲染
        form.render();
    });

    function onEnter() {
        if (window.event.keyCode == 13) {
            document.getElementsByTagName('button')[0].click();
        }
    }

    //粒子特效
    var particle = new Particle('#particle', {
        effect: 'line'
    });
})();