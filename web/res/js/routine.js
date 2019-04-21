/**
 项目JS主入口
 **/
var view_path = './res/views';
layui.define(['laytpl', 'layer', 'element'], function (exports) {
    var laytpl = layui.laytpl,
        layer = layui.layer,
        element = layui.element,
        $ = layui.$;

    var check = function () {
        var router = layui.router(location.hash),
            params = router.search,
            path = router.path;

        // 通过 path 获得对应 view
        var view_path = './res/views',
            view_html = '';
        for (i = 0; i < path.length; i++) {
            view_path = view_path + '/' + path[i];
        }
        if (!path[0]) {
            view_path = view_path + '/index';
        }
        if (!path[1]) {
            view_path = view_path + '/index';
        }
        view_path += '.html';
        console.log(path);
        console.log(view_path);
        var loading = layer.load(2);
        
        // 侧边栏
        $('.layui-nav-item a').click(function () {
            if ($(this).attr('href') != 'javascript:;') { // 排除一级折叠菜单
                layui.data('layui-this', {
                    key: 'href',
                    value: $(this).attr('href')
                });
            }
        });

        // 设置侧边栏导航高亮
        var layui_side_a_href = layui.data('layui-this');

        $('.layui-nav-item a[href="' + layui_side_a_href.href + '"]').parent('dd').addClass('layui-this');
        $('.layui-nav-item a[href="' + layui_side_a_href.href + '"]').parent('li').addClass('layui-this');

        $.ajax({
            type: 'get',
            url: view_path,
            success: function (res) {
                // 填充到页面
                $('.layui-body').html(res);
                layer.close(loading);
            },
            error: function (res) {
                layer.msg('页面不存在');
                layer.close(loading);
                return 0;
            }
        });

    };

    check();
    window.addEventListener('hashchange', function () {
        check();
    });

    exports('routine', {});
});