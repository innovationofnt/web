(function () {
    layui.use('table', function () {
        var value = 3; //用户请求，待修改

        function colChange(value) { //动态改变表头
            if (value == 0) {
                return [
                    [{
                        field: 'num',
                        align: 'center',
                        width: 100,
                        sort: true,
                        title: '标题0'
                    }, {
                        field: 'status',
                        align: 'center',
                        width: 100,
                        title: '标题1'
                    }, {
                        field: 'runstatus',
                        align: 'center',
                        width: 100,
                        title: '标题2'
                    }, {
                        field: 'failIndication',
                        align: 'center',
                        width: 100,
                        title: '标题3'
                    }, {
                        field: 'startFail',
                        align: 'center',
                        width: 100,
                        title: '标题4'
                    }, {
                        field: 'freezeSupplyTemp',
                        align: 'center',
                        width: 100,
                        title: '标题5'
                    }, {
                        field: 'freezeReturnTemp',
                        align: 'center',
                        width: 100,
                        title: '标题6'
                    }, {
                        field: 'tempSet',
                        align: 'center',
                        width: 100,
                        title: '标题7'
                    }]
                ]
            } else if (value == 1) {
                return [
                    [{
                        field: 'num',
                        align: 'center',
                        width: 100,
                        sort: true,
                        title: '标题10'
                    }, {
                        field: 'status',
                        align: 'center',
                        width: 100,
                        title: '标题11'
                    }, {
                        field: 'frequencyRunStatus',
                        align: 'center',
                        width: 100,
                        title: '标题12'
                    }, {
                        field: 'contactorStatus',
                        align: 'center',
                        width: 100,
                        title: '标题13'
                    }, {
                        field: 'inverterStatus',
                        align: 'center',
                        width: 100,
                        title: '标题14'
                    }, {
                        field: 'inverterAlter',
                        align: 'center',
                        width: 100,
                        title: '标题15'
                    }, {
                        field: 'inverterAdjust',
                        align: 'center',
                        width: 100,
                        title: '标题16'
                    }, {
                        field: 'inverterFeedback',
                        align: 'center',
                        width: 100,
                        title: '标题17'
                    }, {
                        field: 'startFail',
                        align: 'center',
                        width: 100,
                        title: '标题18'
                    }, {
                        field: 'pressureDiff',
                        align: 'center',
                        width: 100,
                        title: '标题19'
                    }, {
                        field: 'frequencyAlert',
                        align: 'center',
                        width: 100,
                        title: '标题110'
                    }]
                ]
            } else if (value == 2) {
                return [
                    [{
                        field: 'num',
                        align: 'center',
                        width: 100,
                        sort: true,
                        title: '标题20'
                    }, {
                        field: 'status',
                        align: 'center',
                        width: 100,
                        title: '标题21'
                    }, {
                        field: 'frequencyRunStatus',
                        align: 'center',
                        width: 100,
                        title: '标题22'
                    }, {
                        field: 'contactorStatus',
                        align: 'center',
                        width: 100,
                        title: '标题23'
                    }, {
                        field: 'inverterStatus',
                        align: 'center',
                        width: 100,
                        title: '标题24'
                    }, {
                        field: 'inverterAlter',
                        align: 'center',
                        width: 100,
                        title: '标题25'
                    }, {
                        field: 'inverterAdjust',
                        align: 'center',
                        width: 100,
                        title: '标题26'
                    }, {
                        field: 'inverterFeedback',
                        align: 'center',
                        width: 100,
                        title: '标题27'
                    }, {
                        field: 'startFail',
                        align: 'center',
                        width: 100,
                        title: '标题28'
                    }, {
                        field: 'pressureDiff',
                        align: 'center',
                        width: 100,
                        title: '标题29'
                    }]
                ]
            } else if (value == 3) {
                return [
                    [{
                        field: 'num',
                        align: 'center',
                        width: 100,
                        sort: true,
                        title: '标题30'
                    }, {
                        field: 'status',
                        align: 'center',
                        width: 100,
                        title: '标题31'
                    }, {
                        field: 'frequencyRunStatus',
                        align: 'center',
                        width: 100,
                        title: '标题32'
                    }, {
                        field: 'contactorStatus',
                        align: 'center',
                        width: 100,
                        title: '标题33'
                    }, {
                        field: 'inverterStatus',
                        align: 'center',
                        width: 100,
                        title: '标题34'
                    }, {
                        field: 'inverterAlter',
                        align: 'center',
                        width: 100,
                        title: '标题35'
                    }, {
                        field: 'inverterAdjust',
                        align: 'center',
                        width: 100,
                        title: '标题36'
                    }, {
                        field: 'inverterFeedback',
                        align: 'center',
                        width: 100,
                        title: '标题37'
                    }, {
                        field: 'startFail',
                        align: 'center',
                        width: 100,
                        title: '标题38'
                    }]
                ]
            }
        };

        var table = layui.table;
        table.render({
            elem: '#test-table',
            height: 560,
            cellMinWidth: 80,
            page: true,
            limit: 30,
            url: './res/json/test.json',
            toolbar: 'default',
            page: true,
            parseData: function (res) {//将后台json数据格式化
                if (value == 0) {
                    return {
                        'code': res.status,
                        'msg': res.msg,
                        'count': res.data.chiller.length,
                        'data': res.data.chiller
                    }
                } else if (value == 1) {
                    return {
                        'code': res.status,
                        'msg': res.msg,
                        'count': res.data.freezePump.length,
                        'data': res.data.freezePump
                    }
                } else if (value == 2) {
                    return {
                        'code': res.status,
                        'msg': res.msg,
                        'count': res.data.coolPump.length,
                        'data': res.data.coolPump
                    }
                } else if (value == 3) {
                    return {
                        'code': res.status,
                        'msg': res.msg,
                        'count': res.data.coolTower.length,
                        'data': res.data.coolTower
                    }
                }
            },
            cols: colChange(value)
        })
    });
})();