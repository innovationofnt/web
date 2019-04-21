(function () {
    layui.use(['layer', 'form', 'laydate'], function () {
        var $ = layui.jquery;
        var layer = layui.layer;

        //日期
        var laydate = layui.laydate;
        laydate.render({ //日期选择
            elem: '#predictChart',
            format: 'yyyy年MM月dd日',
            min: 1,
            showBottom: false
        });

        //表单
        var form = layui.form;
        form.on('submit(confirm)', function (data) { //表单提交验证
           
            /*            $.ajax({
                           type: 'post',
                           url: 'https://private-d4332-centraldata.apiary-mock.com/centralData/predictSource', //数据接口
                           data: data.field.date, //input输入框的date表单字段，名值对形式：{name: value}
                           success: function (res) {
                               if (res.code == 0) {//根据返回的code判断 */
            layer.open({
                type: 1,
                title: '预测结果',
                content: ' <div id="confirmChart" style="width: 1000px;height:600px;"></div>', //加载图表
                area: ['1020px', '650px'],
                offset: ['60px', '360px']
            });
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('confirmChart'));

            // 指定图表的配置项和数据
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时', '24时']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [7.5, 8.5, 12.5, 5, 8.5, 5, 9.5, 5, 13, 20, 32, 44, 40, 38, 38.8, 27, 22, 20.5, 17.5, 12.5, 8, 7.9, 7, 12.5],
                    type: 'line'
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            /* } else {
                        layer.msg('预测失败', {
                            time: 2000,
                            icon: 5,
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
                        icon: 5,
                        shade: 0.5,
                        end: function () {
                            layer.close(loading)
                        }
                    });
                } */
            /*    }) */

        });

        //更新渲染
        form.render();
    })
})();