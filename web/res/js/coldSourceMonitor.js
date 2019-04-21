(function () {
    var my_system_chart = echarts.init(document.getElementById('systemChart'));
    var schema = [{
        name: 'date',
        index: 0,
        text: '日'
    }, {
        name: 'test1',
        index: 1,
        text: 'test'
    }, {
        name: 'test2',
        index: 2,
        text: 'test'
    }, {
        name: 'test3',
        index: 3,
        text: 'test'
    }, {
        name: 'test4',
        index: 4,
        text: 'test'
    }, {
        name: 'test5',
        index: 5,
        text: 'test'
    }, {
        name: 'test6',
        index: 6,
        text: 'test'
    }];

    function test() {
        var a = [0, 0];
        var b = [2, 9];
        for (var i in b) {
            a.push(b[i]);
        }
        return a;
    }

    option = {
        title: {
            text: '冷源系统监控页面'
        },
        toolbox: {
            show: true
        },
        //调整grid 组件离容器的距离
        grid: {
            left: '10%',
            top: '20%',
            right: '15',
            bottom: '20%',
            height: '500px',
            width: '1000px'
        },
        backgroundColor: '#000000',
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
        },
        xAxis: {
            type: 'value',
            boundaryGap: false,
            min: 'dataMax',
            max: 'dataMax',
            show: false, //x坐标显示
        },
        yAxis: {
            type: 'value',
            min: 'dataMax',
            max: 'dataMax',
            show: false, //y坐标显示
        },
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            coordinateSystem: 'cartesian2d',
            type: 'lines',
            polyline: true,
            zlevel: 1,
            effect: {
                show: true,
                constantSpeed: 60,
                trailLength: 0.02,
                symbolSize: 10,
                symbol: 'arrow',
                loop: true
            },
            lineStyle: {
                normal: {
                    color: '#ffff00',
                    opacity: 0,
                    curveness: 0
                }
            },
            data: [{ //用于绘制管路流动
                coords: [ //冷却水供水
                    [-1.9, 19],
                    [-1.9, 15],
                    [-7.5, 15],
                    [-7.5, 10],
                    [0, 10],
                    [-2, 10.5],
                    [-2, 13],
                    [12, 13],
                    [12, 9.8],
                    [20, 9.8]
                ],
                lineStyle: {
                    normal: {
                        color: '#CD8500',
                        opacity: 0,
                        curveness: 0
                    }
                },
            }, { //用于绘制管路流动
                coords: [ //冷却水供水
                    [-1.9, 19],
                    [-1.9, 15],
                    [-7.5, 15],
                    [-7.5, 0],
                    [0, 0],
                    [-2, 0.5],
                    [-2, 3],
                    [12, 3],
                    [12, 0.9],
                    [20, 0.9],
                ],
                lineStyle: {
                    normal: {
                        color: '#CD8500',
                        opacity: 0,
                        curveness: 0
                    }
                },
            }, { //用于绘制管路流动
                coords: [ //冷却水回水
                    [20, 10.5],
                    [15, 10.5],
                    [15, 15],
                    [7, 15],
                    [7, 23],
                    [2, 23],
                    [2, 22],
                ],
                lineStyle: {
                    normal: {
                        color: '#FF6347',
                        opacity: 0,
                        curveness: 0
                    }
                },
            }, { //用于绘制管路流动
                coords: [ //冷却水回水
                    [20, 1.5],
                    [15, 1.5],
                    [15, 15],
                    [7, 15],
                    [7, 23],
                    [2, 23],
                    [2, 22],
                ],
                lineStyle: {
                    normal: {
                        color: '#FF6347',
                        opacity: 0,
                        curveness: 0
                    }
                },
            }, { //用于绘制管路流动
                coords: [ //冷冻水供水
                    [30, -0.2],
                    [35, -0.2],
                    [35, 9],
                    [35, 15],
                    [72.5, 15],
                    [72.5, 11.3],
                ],
                lineStyle: {
                    normal: {
                        color: '#4F94CD',
                        opacity: 0,
                        curveness: 0
                    }
                },
            }, { //用于绘制管路流动
                coords: [ //冷冻水供水
                    [30, 8.9],
                    [35, 8.9],
                    [35, 15],
                    [72.5, 15],
                    [72.5, 11.3],
                ],
                lineStyle: {
                    normal: {
                        color: '#4F94CD',
                        opacity: 0,
                        curveness: 0
                    }
                },
            }, { //用于绘制管路流动
                coords: [ //冷冻水回水
                    [72.5, 1.4],
                    [72.5, 5],
                    [57.5, 5],
                    [57.5, 10.1],
                    [53, 10.1],
                    [51.8, 10],
                    [51.8, 13],
                    [39, 13],
                    [39, 9.4],
                    [30, 9.4]
                ],
                lineStyle: {
                    normal: {
                        color: '#40E0D0',
                        opacity: 0,
                        curveness: 0
                    }
                },
            }, { //用于绘制管路流动
                coords: [ //冷冻水回水
                    [72.5, 1.4],
                    [72.5, 5],
                    [57.5, 5],
                    [57.5, 0],
                    [52, 0],
                    [51.8, 0.8],
                    [51.8, 3],
                    [39, 3],
                    [39, 0.4],
                    [30, 0.4]
                ],
                lineStyle: {
                    normal: {
                        color: '#40E0D0',
                        opacity: 0,
                        curveness: 0
                    }
                },
            }]
        }, {
            //silent: true,
            type: 'graph',
            layout: 'none',
            zlevel: 2,
            coordinateSystem: 'cartesian2d',
            symbolSize: 50,
            roam: true,
            label: {
                normal: {
                    show: true,
                },
            },
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    var name = obj.name;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                        obj.seriesName + ' ' + value[1] + name + '日：' +
                        value[7] +
                        '</div>' +
                        schema[1].text + '：' + value[1] + '<br>' +
                        schema[2].text + '：' + value[2] + '<br>' +
                        schema[3].text + '：' + value[3] + '<br>' +
                        schema[4].text + '：' + value[4] + '<br>' +
                        schema[5].text + '：' + value[5] + '<br>' +
                        schema[6].text + '：' + value[6] + '<br>';
                }
            },
            //定义设备节点
            data: [{
                symbol: 'image://./res/img/twore.jpg',
                symbolSize: [92, 100],
                name: '1#冷却塔',
                value: [0, 20],
            }, {
                symbol: 'image://./res/img/coolpunp1.jpg',
                symbolSize: [62, 34],
                name: '1#冷却泵',
                value: [0, 10],
            }, {
                symbol: 'image://./res/img/coolpump2.jpg',
                symbolSize: [62, 34],
                name: '2#冷却泵',
                value: [0, 0],
            }, {
                symbol: 'image://./res/img/freeze.jpg',
                symbolSize: [62, 34],
                name: '1#冷冻泵',
                value: [50, 10],
            }, {
                symbol: 'image://./res/img/freeze2.jpg',
                symbolSize: [62, 34],
                name: '2#冷冻泵',
                value: [50, 0],
            }, {
                symbol: 'image://./res/img/chiller01.jpg',
                symbolSize: [119, 89],
                name: '1#主机',
                value: [25, 10],
            }, {
                symbol: 'image://./res/img/chiller2.jpg',
                symbolSize: [119, 89],
                name: '2#主机',
                value: [25, 1],
            }, {
                symbol: 'image://./res/img/trap.jpg',
                symbolSize: [101, 53],
                name: '冷冻分水器',
                value: [75, 10],
            }, {
                symbol: 'image://./res/img/collector.jpg',
                symbolSize: [101, 53],
                name: '冷却集水器',
                value: [75, 0],
            },],
            lineStyle: {
                normal: {}
            },
        }, {
            //silent: true,
            type: 'graph',
            layout: 'none',
            zlevel: 1,
            coordinateSystem: 'cartesian2d',
            symbolSize: 50,
            label: {
                normal: {
                    show: false, //标签(name)文字显示开关
                },
            },
            tooltip: {
                show: false, //提示框组件显示开关
            },
            //定义管道节点 冷却水供水 cooling supply
            data: [{
                symbolSize: [0, 10],
                name: 'cp1',
                value: [-1.9, 19],
            }, {
                symbolSize: [0, 10],
                name: 'cp2',
                value: [-1.9, 15],
            }, {
                symbolSize: [0, 10],
                name: 'cp3',
                value: [-7.5, 15],
            }, {
                symbolSize: [0, 10],
                name: 'cp4',
                value: [-7.5, 10],
            }, {
                symbolSize: [0, 10],
                name: 'cp5',
                value: [0, 10],
            }, {
                symbolSize: [0, 10],
                name: 'cp6',
                value: [-7.5, 0],
            }, {
                symbolSize: [0, 10],
                name: 'cp7',
                value: [0, 0],
            }, {
                symbolSize: [0, 10],
                name: 'cp8',
                value: [-2, 10.5],
            }, {
                symbolSize: [0, 10],
                name: 'cp9',
                value: [-2, 13],
            }, {
                symbolSize: [0, 10],
                name: 'cp10',
                value: [12, 13],
            }, {
                symbolSize: [0, 10],
                name: 'cp11',
                value: [12, 9.8],
            }, {
                symbolSize: [0, 10],
                name: 'cp12',
                value: [20, 9.8],
            }, {
                symbolSize: [0, 10],
                name: 'cp13',
                value: [-2, 0.5],
            }, {
                symbolSize: [0, 10],
                name: 'cp14',
                value: [-2, 3],
            }, {
                symbolSize: [0, 10],
                name: 'cp15',
                value: [12, 3],
            }, {
                symbolSize: [0, 10],
                name: 'cp16',
                value: [12, 0.9],
            }, {
                symbolSize: [0, 10],
                name: 'cp17',
                value: [20, 0.9],
            },
            //冷却水回水 cooling return
            {
                symbolSize: [0, 10],
                name: 'cr1',
                value: [2, 23],
            }, {
                symbolSize: [0, 10],
                name: 'cr2',
                value: [7, 23],
            }, {
                symbolSize: [0, 10],
                name: 'cr3',
                value: [7, 15],
            }, {
                symbolSize: [0, 10],
                name: 'cr4',
                value: [15, 15],
            }, {
                symbolSize: [0, 10],
                name: 'cr5',
                value: [15, 10.5],
            }, {
                symbolSize: [0, 10],
                name: 'cr6',
                value: [20, 10.5],
            }, {
                symbolSize: [0, 10],
                name: 'cr7',
                value: [15, 1.5],
            }, {
                symbolSize: [0, 10],
                name: 'cr8',
                value: [20, 1.5],
            }, {
                symbolSize: [0, 10],
                name: 'cr9',
                value: [2, 22],
            },
            //冷冻水供水 Chilling Supply
            {
                symbolSize: [0, 10],
                name: 'cs1',
                value: [30, -0.2],
            }, {
                symbolSize: [0, 10],
                name: 'cs2',
                value: [35, -0.2],
            }, {
                symbolSize: [0, 10],
                name: 'cs3',
                value: [30, 8.9],
            }, {
                symbolSize: [0, 10],
                name: 'cs4',
                value: [35, 8.9],
            }, {
                symbolSize: [0, 10],
                name: 'cs5',
                value: [35, 15],
            }, {
                symbolSize: [0, 10],
                name: 'cs6',
                value: [72.5, 15],
            }, {
                symbolSize: [0, 10],
                name: 'cs7',
                value: [72.5, 11.3],
            },
            //冷冻水回水 Chilling Return
            {
                symbolSize: [0, 100],
                name: 'ct1',
                value: [72.5, 1.4],
            }, {
                symbolSize: [0, 10],
                name: 'ct2',
                value: [72.5, 5],
            }, {
                symbolSize: [0, 10],
                name: 'ct3',
                value: [57.5, 5],
            }, {
                symbolSize: [0, 10],
                name: 'ct4',
                value: [39, 0.4],
            }, {
                symbolSize: [0, 10],
                name: 'ct5',
                value: [30, 0.4],
            }, {
                symbolSize: [0, 10],
                name: 'ct6',
                value: [30, 9.4],
            }, {
                symbolSize: [0, 10],
                name: 'ct7',
                value: [39, 9.4],
            }, {
                symbolSize: [0, 10],
                name: 'ct8',
                value: [39, 13],
            }, {
                symbolSize: [0, 10],
                name: 'ct9',
                value: [51.8, 13],
            }, {
                symbolSize: [0, 10],
                name: 'ct10',
                value: [51.8, 11],
            }, {
                symbolSize: [0, 10],
                name: 'ct11',
                value: [39, 3],
            }, {
                symbolSize: [0, 10],
                name: 'ct12',
                value: [51.8, 3],
            }, {
                symbolSize: [0, 10],
                name: 'ct13',
                value: [51.8, 0.8],
            }, {
                symbolSize: [0, 10],
                name: 'ct14',
                value: [53, 10.1],
            }, {
                symbolSize: [0, 10],
                name: 'ct15',
                value: [57.5, 10.1],
            }, {
                symbolSize: [0, 10],
                name: 'ct16',
                value: [53, 0],
            }, {
                symbolSize: [0, 10],
                name: 'ct17',
                value: [57.5, 0],
            }, {
                symbolSize: [0, 10],
                name: 'cooling_tower_info',
                value: [0, 24],
                label: {
                    normal: {
                        show: true,
                        formatter: '远程/' + String(50) + 'Hz/' + String(1.5) + 'kW',
                        textStyle: {
                            fontSize: 13,
                            align: 'center',
                        },
                    },
                },
            }, { //温度点 冷却水供水
                symbolSize: [0, 10],
                name: 'cooling_supply_water1',
                value: [-1.9, 15],
            }, { //温度点
                symbolSize: [0, 10],
                name: 'cooling_supply_water2',
                value: [0, 15],
                label: {
                    normal: {
                        show: true,
                        formatter: +String(50) + '℃',
                        textStyle: {
                            fontSize: 13,
                            align: 'center',
                        },
                    },
                },
            }, { //温度点 冷却水回水
                symbolSize: [0, 10],
                name: 'cooling_return_water1',
                value: [15, 15],
            }, { //温度点
                symbolSize: [0, 10],
                name: 'cooling_return_water2',
                value: [17, 15],
                label: {
                    normal: {
                        show: true,
                        formatter: +String(50) + '℃',
                        textStyle: {
                            fontSize: 13,
                            align: 'center',
                        },
                    },
                },
            }, { //温度点 冷冻水供水
                symbolSize: [0, 10],
                name: 'freezing_supply_water1',
                value: [72.5, 15],
            }, { //温度点
                symbolSize: [0, 10],
                name: 'freezing_supply_water2',
                value: [74.5, 15],
                label: {
                    normal: {
                        show: true,
                        formatter: String(50) + '℃',
                        textStyle: {
                            fontSize: 13,
                            align: 'center',
                        },
                    },
                },
            }, { //温度点 冷冻水回水
                symbolSize: [0, 10],
                name: 'freezing_return_water1',
                value: [72.5, 5],

            }, { //温度点
                symbolSize: [0, 10],
                name: 'freezing_return_water2',
                value: [74.5, 5],
                label: {
                    normal: {
                        show: true,
                        formatter: String(50) + '℃',
                        textStyle: {
                            fontSize: 13,
                            align: 'center',
                        },
                    },
                },
            },
            ],
            links: [
                //冷却水供水管路
                {
                    source: 'cp1',
                    target: 'cp2',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp2',
                    target: 'cp3',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp3',
                    target: 'cp4',

                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp4',
                    target: 'cp5',

                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp4',
                    target: 'cp6',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp6',
                    target: 'cp7',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp8',
                    target: 'cp9',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp9',
                    target: 'cp10',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp10',
                    target: 'cp11',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp11',
                    target: 'cp12',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp13',
                    target: 'cp14',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp14',
                    target: 'cp15',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp15',
                    target: 'cp16',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                }, {
                    source: 'cp16',
                    target: 'cp17',
                    lineStyle: {
                        normal: {
                            color: '#CD8500',
                        }
                    }
                },
                //冷却水回水管路
                {
                    source: 'cr1',
                    target: 'cr2',
                    lineStyle: {
                        normal: {
                            color: '#FF6347',
                        }
                    }
                }, {
                    source: 'cr2',
                    target: 'cr3',
                    lineStyle: {
                        normal: {
                            color: '#FF6347',
                        }
                    }
                }, {
                    source: 'cr3',
                    target: 'cr4',
                    lineStyle: {
                        normal: {
                            color: '#FF6347',
                        }
                    }
                }, {
                    source: 'cr4',
                    target: 'cr5',
                    lineStyle: {
                        normal: {
                            color: '#FF6347',
                        }
                    }
                }, {
                    source: 'cr5',
                    target: 'cr6',
                    lineStyle: {
                        normal: {
                            color: '#FF6347',
                        }
                    }
                }, {
                    source: 'cr5',
                    target: 'cr7',
                    lineStyle: {
                        normal: {
                            color: '#FF6347',
                        }
                    }
                }, {
                    source: 'cr7',
                    target: 'cr8',
                    lineStyle: {
                        normal: {
                            color: '#FF6347',
                        }
                    }
                }, {
                    source: 'cr1',
                    target: 'cr9',
                    lineStyle: {
                        normal: {
                            color: '#FF6347',
                        }
                    }
                },
                //冷冻水供水
                {
                    source: 'cs1',
                    target: 'cs2',
                    lineStyle: {
                        normal: {
                            color: '#4F94CD',
                        }
                    }
                }, {
                    source: 'cs2',
                    target: 'cs4',
                    lineStyle: {
                        normal: {
                            color: '#4F94CD',
                        }
                    }
                }, {
                    source: 'cs3',
                    target: 'cs4',
                    lineStyle: {
                        normal: {
                            color: '#4F94CD',
                        }
                    }
                }, {
                    source: 'cs4',
                    target: 'cs5',
                    lineStyle: {
                        normal: {
                            color: '#4F94CD',
                        }
                    }
                }, {
                    source: 'cs5',
                    target: 'cs6',
                    lineStyle: {
                        normal: {
                            color: '#4F94CD',
                        }
                    }
                }, {
                    source: 'cs6',
                    target: 'cs7',
                    lineStyle: {
                        normal: {
                            color: '#4F94CD',
                        }
                    }
                },
                //冷冻水回水
                {
                    source: 'ct6',
                    target: 'ct7',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct7',
                    target: 'ct8',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct8',
                    target: 'ct9',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct9',
                    target: 'ct10',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct14',
                    target: 'ct15',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct15',
                    target: 'ct3',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct3',
                    target: 'ct2',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct2',
                    target: 'ct1',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct5',
                    target: 'ct4',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct4',
                    target: 'ct11',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct11',
                    target: 'ct12',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct12',
                    target: 'ct13',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct16',
                    target: 'ct17',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                }, {
                    source: 'ct17',
                    target: 'ct3',
                    lineStyle: {
                        normal: {
                            color: '#40E0D0',
                        }
                    }
                },
            ],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 3,
                    curveness: 0,
                    color: '#FF7F99',
                }
            },
        },]
    }
    my_system_chart.setOption(option);
})();