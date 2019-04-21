(function () {
    layui.use(['table', 'form', 'layer', 'laytpl'], function () {
        var table = layui.table;
        var form = layui.form;
        var layer = layui.layer;
        var laytpl = layui.laytpl;
        var $ = layui.$;

        //表格渲染
        var tableIns = table.render({
            elem: '#userManage-table',
            height: 560,
            cellMinWidth: 60,
            page: true,
            limit: 30,
            url: './res/json/user.json',
            toolbar: '#addBtn', //表格上方左侧模板,
            page: true,
            cols: [
                [{
                        field: 'id',
                        align: 'center',
                        width: 100,
                        sort: true,
                        fixed: true,
                        title: 'ID'
                    },
                    {
                        field: 'account',
                        align: 'center',
                        width: 200,
                        title: '账户'
                    },
                    {
                        field: 'username',
                        align: 'center',
                        width: 200,
                        title: '用户名'
                    },
                    {
                        field: 'name',
                        align: 'center',
                        width: 100,
                        title: '姓名'
                    },
                    {
                        field: 'password',
                        align: 'center',
                        width: 150,
                        title: '密码'
                    },
                    {
                        field: 'phone',
                        align: 'center',
                        width: 150,
                        title: '联系方式'
                    },
                    {
                        field: 'mail',
                        align: 'center',
                        width: 200,
                        title: '邮箱'
                    },
                    {
                        field: 'authority',
                        align: 'center',
                        width: 70,
                        sort: true,
                        title: '权限'
                    },
                    {
                        fixed: 'right',
                        align: 'center',
                        width: 120,
                        align: 'center',
                        toolbar: '#barUser'
                    },
                ]
            ]
        });

        //表格搜索
        var active = {
            reload: function () {
                var userSearch = $('#userSearch');
                //执行重载
                tableIns.reload({
                    page: {
                        curr: 1 //重新从第1页开始
                    },
                    where: {
                        id: userSearch.val()
                    }
                });
            }
        };
        $('#searchBtn').on('click', function () {
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });

        //监听工具条
        table.on('tool(userManage-table-filter)', function (obj) {
            var data = obj.data; //获取当前行数据
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
            } else if (obj.event === 'edit') { //编辑
                var edit_html = laytpl($('#edit').html()).render(data);
                var edit_layer = layer.open({
                    type: 1,
                    title: '编辑',
                    content: edit_html,
                    area: ['600px', '600px'],
                    offset: ['75px', '560px']
                });

                //监听提交
                form.on('submit(submit-form)', function (data) {
                    var loading = layer.load(2);
                    $.ajax({
                        type: 'post',
                        url: '',
                        data: data.field,
                        success: function (res) {
                            if (res.code == 0) {
                                layer.msg('编辑成功', {
                                    time: 2000,
                                    icon: 1,
                                    shade: 0.5,
                                    end: function () {
                                        obj.update(res.data);
                                        layer.close(loading);
                                        layer.close(edit_layer);
                                    }
                                });
                            } else {
                                layer.msg('编辑失败', {
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
                            })
                        }
                    });
                    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可
                })


                //更新渲染
                form.render();
            }
        });

        //头部工具栏新增事件
        table.on('toolbar(userManage-table-filter)', function (obj) {
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