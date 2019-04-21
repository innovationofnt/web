(function () {
    layui.config({ //加载外置模板
        base: './res/js/',
    });
    layui.use(['table', 'laydate', 'interact'], function () {
        var interact = layui.interact; //联动查询
        var data = [{
                "id": 1,
                "pid": 0,
                "title": "冷源"
            },
            {
                "id": 2,
                "pid": 0,
                "title": "末端"
            }, {
                "id": 3,
                "pid": 1,
                "title": "冷却塔"
            }, {
                "id": 4,
                "pid": 1,
                "title": "冷冻泵"
            }, {
                "id": 5,
                "pid": 1,
                "title": "主机"
            }, {
                "id": 6,
                "pid": 2,
                "title": "冷却塔"
            }, {
                "id": 7,
                "pid": 2,
                "title": "冷冻泵"
            }, {
                "id": 8,
                "pid": 2,
                "title": "主机"
            }, {
                "id": 9,
                "pid": 3,
                "title": "节点1"
            }, {
                "id": 10,
                "pid": 3,
                "title": "节点2"
            }, {
                "id": 11,
                "pid": 3,
                "title": "节点3"
            }, {
                "id": 12,
                "pid": 4,
                "title": "节点1"
            }, {
                "id": 13,
                "pid": 4,
                "title": "节点2"
            }, {
                "id": 14,
                "pid": 4,
                "title": "节点3"
            }, {
                "id": 15,
                "pid": 5,
                "title": "节点1"
            }, {
                "id": 16,
                "pid": 5,
                "title": "节点2"
            }, {
                "id": 16,
                "pid": 5,
                "title": "节点3"
            }, {
                "id": 17,
                "pid": 6,
                "title": "节点1"
            }, {
                "id": 18,
                "pid": 6,
                "title": "节点2"
            }, {
                "id": 19,
                "pid": 6,
                "title": "节点3"
            }, {
                "id": 20,
                "pid": 7,
                "title": "节点1"
            }, {
                "id": 21,
                "pid": 7,
                "title": "节点2"
            }, {
                "id": 22,
                "pid": 7,
                "title": "节点3"
            }, {
                "id": 23,
                "pid": 8,
                "title": "节点1"
            }, {
                "id": 24,
                "pid": 8,
                "title": "节点2"
            }, {
                "id": 25,
                "pid": 8,
                "title": "节点3"
            }
        ];
        interact.render({
            elem: '.deviceSearch',
            title: '<i class="layui-icon layui-icon-search"></i>',
            data: data,
            name: 'region1',
            hint: ['请选择区域', '请选择设备', '请选择节点'],
        });

        var table = layui.table; //表格
        table.render({
            elem: '#tem-table',
            height: 560,
            page: true,
            limit: 30,
            url: './res/json/tem.json',
            toolbar: '#dataChart', //表格上方左侧模板
            page: true,
            cols: [
                [{
                        field: 'collectTime',
                        align: 'center',
                        width: 350,
                        sort: true,
                        title: '时间'
                    },
                    {
                        field: 'deviceName',
                        align: 'center',
                        width: 350,
                        title: '设备名称'
                    },
                    {
                        field: 'temperature',
                        align: 'center',
                        width: 350,
                        title: '温度'
                    }
                ]
            ]
        });

        var laydate = layui.laydate; //日期
        laydate.render({
            elem: '.timeSearch',
            format: 'yyyy年MM月dd日',
            range: true
        });

        //头工具栏事件
        table.on('toolbar(tem-table-filter)', function (obj) {
            switch (obj.event) {
                case 'chart':
                    layer.msg('生成数据表格');
                    break;
            };
        });

    });
})();