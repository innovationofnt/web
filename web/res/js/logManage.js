(function () {
    layui.use(['table', 'form', 'laydate', 'layer', 'laytpl'], function () {
        var laydate = layui.laydate;
        var form = layui.form;
        var table = layui.table;
        var layer = layui.layer;
        var laytpl = layui.laytpl;
        var $ = layui.$;

        //日期选择
        laydate.render({
            elem: '#logSearch',
            format: 'yyyy年MM月dd日',
            showBottom: false
        });

        //表格渲染
        var tableIns = table.render({
            elem: '#logManage-table',
            height: 560,
            cellMinWidth: 80,
            page: true,
            limit: 30,
            url: './res/json/log.json',
            toolbar: '#addBtn', //表格上方左侧模板
            page: true,
            cols: [
                [{
                        field: 'time',
                        align: 'center',
                        width: 200,
                        sort: true,
                        title: '时间'
                    },
                    {
                        field: 'type',
                        align: 'center',
                        width: 100,
                        title: '日志类型'
                    },
                    {
                        field: 'key',
                        align: 'center',
                        width: 200,
                        title: '日志摘要'
                    },
                    {
                        field: 'content',
                        align: 'center',
                        width: 500,
                        title: '日志内容'
                    },
                    {
                        fixed: 'right',
                        align: 'center',
                        width: 200,
                        align: 'center',
                        edit: 'text',
                        toolbar: '#barLog'
                    },
                ]
            ]

        });

        //表格搜索
        var active = {
            reload: function () {
                var logSearch = $('#logSearch');
                //执行重载
                tableIns.reload({
                    page: {
                        curr: 1 //重新从第1页开始
                    },
                    where: {
                        id: logSearch.val()
                    }
                });
            }
        };
        $('#searchBtn').on('click', function () {
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });

        //监听工具条
        table.on('tool(logManage-table-filter)', function (obj) {
            var data = obj.data;
            if (obj.event === 'del') { //删除
                layer.confirm('确定删除该用户信息？', {
                    title: '删除'
                }, function (index) {
                    obj.del();
                    var loading = layer.load(2);
                    /* $.ajax({
                        type: 'post',
                        url: '',
                        data: {
                            id: data.id
                        },
                        success: function (res) {
                            if (res.code == 0) {
                                layer.msg('删除成功', {
                                    time: 2000,
                                    icon: 1,
                                    shade: 0.5,
                                    end: function () {
                                        obj.del(); //删除对应行(tr)的DOM结构，并更新缓存
                                        layer.close(loading);
                                    }
                                });
                            } else {
                                layer.msg('删除失败', {
                                    time: 2000,
                                    icon: 2,
                                    shade: 0.5,
                                    end: function () {
                                        layer.close(loading);
                                    }
                                });
                            }
                        },
                        error: function (res) {
                            layer.msg('数据传输异常', {
                                time: 2000,
                                icon: 0,
                                shade: 0.5,
                                end: function () {
                                    layer.close(loading);
                                }
                            });
                        }
                    }); */
                    layer.close(index);
                });
            } else if (obj.event == 'detail') { //查看
                var detail_html = laytpl($('#detail').html()).render(data);
                layer.open({
                    type: 1,
                    title: '日志详情',
                    content: detail_html,
                    area: ['500px', '300px']
                });
            }
        });

        //头工具栏事件
        table.on('toolbar(logManage-table-filter)', function (obj) {
            if (obj.event == 'add') { //新增
                var add_html = laytpl($('#add').html()).render({});
                var add_layer = layer.open({
                    type: 1,
                    title: '新增',
                    content: add_html,
                    area: ['600px', '600px'],
                    offset: ['75px', '560px']
                });

                //监听提交
                form.on('submit(submit-form)', function (data) {
                    var loading = layer.load(2);
                    $.ajax({
                        type: 'post',
                        url: '', //数据接口
                        data: {
                            id: data.id
                        },
                        seccess: function (res) {
                            if (res.code == 0) {
                                layer.msg('新增成功', {
                                    time: 2000,
                                    icon: 1,
                                    shade: 0.5,
                                    end: function () {
                                        tableIns.reload();
                                        layer.close(loading);
                                        layer.close(add_layer)
                                    }
                                })
                            } else {
                                layer.msg('新增失败', {
                                    time: 2000,
                                    icon: 2,
                                    shade: 0.3,
                                    end: function () {
                                        layer.close(loading);
                                    }
                                })
                            }
                        },
                        error: function () {
                            layer.msg('数据传输异常', {
                                time: 2000,
                                icon: 0,
                                shade: 0.5,
                                end: function () {
                                    layer.close(loading);
                                }
                            })
                        }
                    });
                })

                //更新渲染
                form.render();
            }

        });


    });
})();