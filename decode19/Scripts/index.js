$(document).ready(function () {
    var timeData0 = [],
        timeData1 = [],
        timeData2 = [],
        timeData3 = [],
        timeData4 = [],
        timeData5 = [],
        timeData6 = [],
        timeData7 = [],
        timeData8 = [],
        timeData9 = [],
        timeData10 = [],
        timeData11 = [],
        timeData12 = [],
        timeData13 = [],
        timeData14 = [],
        timeData15 = [],
        timeData16 = [],
        timeData17 = [],
        timeData18 = [],
        timeData19 = [],
        temperatureData0 = [],
        batteryData0 = [],
        temperatureData1 = [],
        batteryData1 = [],
        temperatureData2 = [],
        batteryData2 = [],
        temperatureData3 = [],
        batteryData3 = [],
        temperatureData4 = [],
        batteryData4 = [],
        temperatureData5 = [],
        batteryData5 = [],
        temperatureData6 = [],
        batteryData6 = [],
        temperatureData7 = [],
        batteryData7 = [],
        temperatureData8 = [],
        batteryData8 = [],
        temperatureData9 = [],
        batteryData9 = [],
        temperatureData10 = [],
        batteryData10 = [],
        temperatureData11 = [],
        batteryData11 = [],
        temperatureData12 = [],
        batteryData12 = [],
        temperatureData13 = [],
        batteryData13 = [],
        temperatureData14 = [],
        batteryData14 = [],
        temperatureData15 = [],
        batteryData15 = [],
        temperatureData16 = [],
        batteryData16 = [],
        temperatureData17 = [],
        batteryData17 = [],
        temperatureData18 = [],
        batteryData18 = [],
        temperatureData19 = [],
        batteryData19 = [];
    var data0 = {
        labels: timeData0,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData0
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData0
            }
        ]
    };
    var data1 = {
        labels: timeData1,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData1
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData1
            }
        ]
    };
    var data2 = {
        labels: timeData2,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData2
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData2
            }
        ]
    };
    var data3 = {
        labels: timeData3,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData3
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData3
            }
        ]
    };
    var data4 = {
        labels: timeData4,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData4
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData4
            }
        ]
    };
    var data5 = {
        labels: timeData5,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData5
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData5
            }
        ]
    };
    var data6 = {
        labels: timeData6,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData6
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData6
            }
        ]
    };
    var data7 = {
        labels: timeData7,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData7
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData7
            }
        ]
    };
    var data8 = {
        labels: timeData8,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData8
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData8
            }
        ]
    };
    var data9 = {
        labels: timeData9,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData9
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData9
            }
        ]
    };

    var data10 = {
        labels: timeData10,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData10
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData10
            }
        ]
    };
    var data11 = {
        labels: timeData11,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData11
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData11
            }
        ]
    };
    var data12 = {
        labels: timeData12,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData12
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData12
            }
        ]
    };
    var data13 = {
        labels: timeData13,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData13
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData13
            }
        ]
    };
    var data14 = {
        labels: timeData14,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData14
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData14
            }
        ]
    };
    var data15 = {
        labels: timeData15,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData15
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData15
            }
        ]
    };
    var data16 = {
        labels: timeData16,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData16
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData16
            }
        ]
    };
    var data17 = {
        labels: timeData17,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData17
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData17
            }
        ]
    };
    var data18 = {
        labels: timeData18,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData18
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData18
            }
        ]
    };
    var data19 = {
        labels: timeData19,
        datasets: [
            {
                fill: false,
                label: 'Temperature',
                yAxisID: 'Temperature',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: temperatureData19
            },
            {
                fill: false,
                label: 'Battery',
                yAxisID: 'Battery',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: batteryData19
            }
        ]
    };

    var basicOptions = [
        {
           title: {
                display: true,
                text: 'Room A',
                fontSize: 24
            },
            scales: {
            yAxes: [{
                id: 'Temperature',
                type: 'linear',
                scaleLabel: {
                    labelString: 'Temperature(C)',
                    display: true
                },
                position: 'left'
            }, {
                id: 'Battery',
                type: 'linear',
                scaleLabel: {
                    labelString: 'Battery(V)',
                    display: true
                },
                position: 'right'
            }]
        }
        },
        {
            title: {
                display: true,
                text: 'Room B',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room C',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room D',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room E',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room F',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room G',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room H',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room I',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room J',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room K',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room L',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room M',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room N',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Room O',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'EXPO AREA',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Tag17',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Tag18',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Tag19',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        },
        {
            title: {
                display: true,
                text: 'Tag20',
                fontSize: 24
            },
            scales: {
                yAxes: [{
                    id: 'Temperature',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Temperature(C)',
                        display: true
                    },
                    position: 'left'
                }, {
                    id: 'Battery',
                    type: 'linear',
                    scaleLabel: {
                        labelString: 'Battery(V)',
                        display: true
                    },
                    position: 'right'
                }]
            }
        }
    ];
    var deviceTimes = {
        "tag1": timeData0, "tag2": timeData1, "tag3": timeData2, "tag4": timeData3, "tag5": timeData4, "tag6": timeData5, "tag7": timeData6, "tag8": timeData7, "tag9": timeData8, "tag10": timeData9, "tag11": timeData10, "tag12": timeData11, "tag13": timeData12, "tag14": timeData13, "tag15": timeData14, "tag16": timeData15, "tag17": timeData16, "tag18": timeData17, "tag19": timeData18, "tag20": timeData19
    };

    var deviceTemps = {
        "tag1": temperatureData0, "tag2": temperatureData1, "tag3": temperatureData2, "tag4": temperatureData3, "tag5": temperatureData4, "tag6": temperatureData5, "tag7": temperatureData6, "tag8": temperatureData7, "tag9": temperatureData8, "tag10": temperatureData9, "tag11": temperatureData10, "tag12": temperatureData11, "tag13": temperatureData12, "tag14": temperatureData13, "tag15": temperatureData14, "tag16": temperatureData15, "tag17": temperatureData16, "tag18": temperatureData17, "tag19": temperatureData18, "tag20": temperatureData19
    };
    var deviceHums = {
        "tag1": batteryData0, "tag2": batteryData1, "tag3": batteryData2, "tag4": batteryData3, "tag5": batteryData4, "tag6": batteryData5, "tag7": batteryData6, "tag8": batteryData7, "tag9": batteryData8, "tag10": batteryData9, "tag11": batteryData10, "tag12": batteryData11, "tag13": batteryData12, "tag14": batteryData13, "tag15": batteryData14, "tag16": batteryData15, "tag17": batteryData16, "tag18": batteryData17, "tag19": batteryData18, "tag20": batteryData19
    };

    //Get the context of the canvas element we want to select
    var ctx0 = document.getElementById("myChart0").getContext("2d");
    var optionsNoAnimation0 = { animation: false };
    var myLineChart0 = new Chart(ctx0, {
        type: 'line',
        data: data0,
        options: basicOptions[0]
    });
    var ctx1 = document.getElementById("myChart1").getContext("2d");
    var optionsNoAnimation1 = { animation: false };
    var myLineChart1 = new Chart(ctx1, {
        type: 'line',
        data: data1,
        options: basicOptions[1]
    });
    var ctx2 = document.getElementById("myChart2").getContext("2d");
    var optionsNoAnimation2 = { animation: false };
    var myLineChart2 = new Chart(ctx2, {
        type: 'line',
        data: data2,
        options: basicOptions[2]
    });
    var ctx3 = document.getElementById("myChart3").getContext("2d");
    var optionsNoAnimation3 = { animation: false };
    var myLineChart3 = new Chart(ctx3, {
        type: 'line',
        data: data3,
        options: basicOptions[3]
    });
    var ctx4 = document.getElementById("myChart4").getContext("2d");
    var optionsNoAnimation4 = { animation: false };
    var myLineChart4 = new Chart(ctx4, {
        type: 'line',
        data: data4,
        options: basicOptions[4]
    });
    var ctx5 = document.getElementById("myChart5").getContext("2d");
    var optionsNoAnimation5 = { animation: false };
    var myLineChart5 = new Chart(ctx5, {
        type: 'line',
        data: data5,
        options: basicOptions[5]
    });
    var ctx6 = document.getElementById("myChart6").getContext("2d");
    var optionsNoAnimation6 = { animation: false };
    var myLineChart6 = new Chart(ctx6, {
        type: 'line',
        data: data6,
        options: basicOptions[6]
    });
    var ctx7 = document.getElementById("myChart7").getContext("2d");
    var optionsNoAnimation7 = { animation: false };
    var myLineChart7 = new Chart(ctx7, {
        type: 'line',
        data: data7,
        options: basicOptions[7]
    });
    var ctx8 = document.getElementById("myChart8").getContext("2d");
    var optionsNoAnimation8 = { animation: false };
    var myLineChart8 = new Chart(ctx8, {
        type: 'line',
        data: data8,
        options: basicOptions[8]
    });
    var ctx9 = document.getElementById("myChart9").getContext("2d");
    var optionsNoAnimation9 = { animation: false };
    var myLineChart9 = new Chart(ctx9, {
        type: 'line',
        data: data9,
        options: basicOptions[9]
    });
    var ctx10 = document.getElementById("myChart10").getContext("2d");
    var optionsNoAnimation10 = { animation: false };
    var myLineChart10 = new Chart(ctx10, {
        type: 'line',
        data: data10,
        options: basicOptions[10]
    });
    var ctx11 = document.getElementById("myChart11").getContext("2d");
    var optionsNoAnimation11 = { animation: false };
    var myLineChart11 = new Chart(ctx11, {
        type: 'line',
        data: data11,
        options: basicOptions[11]
    });
    var ctx12 = document.getElementById("myChart12").getContext("2d");
    var optionsNoAnimation12 = { animation: false };
    var myLineChart12 = new Chart(ctx12, {
        type: 'line',
        data: data12,
        options: basicOptions[12]
    });
    var ctx13 = document.getElementById("myChart13").getContext("2d");
    var optionsNoAnimation13 = { animation: false };
    var myLineChart13 = new Chart(ctx13, {
        type: 'line',
        data: data13,
        options: basicOptions[13]
    });
    var ctx14 = document.getElementById("myChart14").getContext("2d");
    var optionsNoAnimation14 = { animation: false };
    var myLineChart14 = new Chart(ctx14, {
        type: 'line',
        data: data14,
        options: basicOptions[14]
    });
    var ctx15 = document.getElementById("myChart15").getContext("2d");
    var optionsNoAnimation15 = { animation: false };
    var myLineChart15 = new Chart(ctx15, {
        type: 'line',
        data: data15,
        options: basicOptions[15]
    });
    var ctx16 = document.getElementById("myChart16").getContext("2d");
    var optionsNoAnimation16 = { animation: false };
    var myLineChart16 = new Chart(ctx16, {
        type: 'line',
        data: data16,
        options: basicOptions[16]
    });
    var ctx17 = document.getElementById("myChart17").getContext("2d");
    var optionsNoAnimation17 = { animation: false };
    var myLineChart17 = new Chart(ctx17, {
        type: 'line',
        data: data17,
        options: basicOptions[17]
    });
    var ctx18 = document.getElementById("myChart18").getContext("2d");
    var optionsNoAnimation18 = { animation: false };
    var myLineChart18 = new Chart(ctx18, {
        type: 'line',
        data: data18,
        options: basicOptions[18]
    });
    var ctx19 = document.getElementById("myChart19").getContext("2d");
    var optionsNoAnimation19 = { animation: false };
    var myLineChart19 = new Chart(ctx19, {
        type: 'line',
        data: data19,
        options: basicOptions[19]
    });

    var myLineCharts = { "tag1": myLineChart0, "tag2": myLineChart1, "tag3": myLineChart2, "tag4": myLineChart3, "tag5": myLineChart4, "tag6": myLineChart5, "tag7": myLineChart6, "tag8": myLineChart7, "tag9": myLineChart8, "tag10": myLineChart9, "tag11": myLineChart10, "tag12": myLineChart11, "tag13": myLineChart12, "tag14": myLineChart13, "tag15": myLineChart14, "tag16": myLineChart15, "tag17": myLineChart16, "tag18": myLineChart17, "tag19": myLineChart18, "tag20": myLineChart19 };
    const apiBaseUrl = "https://mshiroshodegudc19.azurewebsites.net";

    getConnectionInfo().then(function (info) {
        let accessToken = info.accessToken;
        const options = {
            accessTokenFactory: function () {
                if (accessToken) {
                    const _accessToken = accessToken;
                    accessToken = null;
                    return _accessToken;
                } else {
                    return getConnectionInfo().then(function (info) {
                        return info.accessToken;
                    });
                }
            }
        };


        const connection = new signalR.HubConnectionBuilder()
            .withUrl(`${apiBaseUrl}/api`,options)
            .configureLogging(signalR.LogLevel.Information)
            .build();
        connection.on("newMessage", function (obj) {
            if (!obj.DeviceId && (!obj.Time || !obj.Temp || !obj.Battery)) {
                return;
            }
            deviceTimes[obj.DeviceId].push(obj.Time);
            deviceTemps[obj.DeviceId].push(obj.Temp);
            deviceHums[obj.DeviceId].push(obj.Battery);

            // only keep no more than 50 points in the line chart
            var len = deviceTimes[obj.DeviceId].length;
            if (len > 60) {
                deviceTimes[obj.DeviceId].shift();
                deviceTemps[obj.DeviceId].shift();
                deviceHums[obj.DeviceId].shift();
            }
            myLineCharts[obj.DeviceId].update();
        });

        connection.onclose(function () {
            console.log('disconnected');
            setTimeout(function () { startConnection(connection); }, 2000);
        });

        console.log('connecting...');
        connection.start()
            .then(() => data.ready = true)
            .catch(console.error);
    });

    function getConnectionInfo() {
        return $.post(`${apiBaseUrl}/api/SignalRInfo`, null)
            .done(function (resp) { return resp.data; })
            .error(function () { return {}; });
    }
});
