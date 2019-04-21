(function () {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#coldSource-table',
            height: 550,
            cellMinWidth: 80,
            page: true,
            limit: 30,
            url: '../data/数据统计/source.json',
            toolbar: 'default',
            page: true,
            cols: [
                [{
                        field: 'collectTime',
                        align:'center',
                        width: 300,
                        sort: true,
                        title: '采集时间'
                    },
                    {
                        field: 'deviceNumber',
                        align: 'center',
                        width: 300,
                        title: '设备编号'
                    },
                    {
                        field: 'deviceName',
                        align: 'center',
                        width: 300,
                        title: '设备名称'
                    },
                    {
                        field: 'deviceState',
                        align: 'center',
                        width: 300,
                        title: '设备状态'
                    },
                ]
            ]

        })
    });
})();