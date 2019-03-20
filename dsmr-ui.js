$( document ).ready(function() {
    if (localStorage.length === 0) {
        localStorage.setItem('three-phase-power', false);
        localStorage.setItem('power-return', false);
    }

    if (localStorage.getItem('three-phase-power')) {
        $('div#current\\.three-phase-power').hide();
    }
    if (localStorage.getItem('power-return')) {
        $('div#current\\.power-returns').hide();
    }

    var dayLabels = function() {
        var labels = [];
        for (i = 0; i < 24; i++) {
            labels.push(i + ':00');
        }
        labels.push('23:59');

        return labels;
    };
    new Chart(
        document.getElementById('day-bar-chart').getContext('2d'),
        {
            type: 'bar',
            data: {
                labels: dayLabels(),
                datasets: [{
                    data: [103, 105, 121, 115, 117, 118, 121, 167, 156, 130, 132, 134, 220, 103, 105, 121, 115, 117, 118, 121, 167, 156, 130, 132],
                    borderWidth: 1,
                    backgroundColor: '#007bff'
                }]
            },
            options: {
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: true,
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return;
                        },
                        label: function(tooltipItem, data) {
                            return tooltipItem.xLabel + ' ' + tooltipItem.yLabel + ' watt';
                        }
                    },
                    scales: {
                        xAxes: [{
                            barPercentage: 0.5,
                            barThickness: 6,
                            maxBarThickness: 8,
                            minBarLength: 20,
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 20,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        }
    );
    new Chart(
        document.getElementById('week-bar-chart').getContext('2d'),
        {
            type: 'bar',
            data: {
                labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
                datasets: [{
                    data: [7.268, 5.373, 11.248, 2.708, 2.644, 4.727, 4.546],
                    borderWidth: 1,
                    backgroundColor: '#007bff'
                }]
            },
            options: {
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: true,
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return;
                        },
                        label: function(tooltipItem, data) {
                            return tooltipItem.xLabel + ' ' + tooltipItem.yLabel + ' kWh';
                        }
                    },
                    scales: {
                        xAxes: [{
                            barPercentage: 0.5,
                            barThickness: 6,
                            maxBarThickness: 8,
                            minBarLength: 20,
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 20,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        }
    );
    var historyLabels = function() {
        let labels = [];
        for (i = 24; i >= 0; i--) {
            year = 2019 - Math.floor(i/12);
            month = i % 12 === 0 ? 12 : i % 12;
            labels.push(month + '-' + year);
        }

        return labels;
    };
    var historyDataSet = function () {
        let dataset = [];
        for (i = 0; i < 24; i++) {
            dataset.push((Math.random() * (300 - 120) + 120).toFixed(3)
            );
        }

        return dataset;
    };
    new Chart(
        document.getElementById('history-bar-chart').getContext('2d'),
        {
            type: 'bar',
            data: {
                labels: historyLabels(),
                datasets: [{
                    data: historyDataSet(),
                    borderWidth: 1,
                    backgroundColor: '#007bff'
                }]
            },
            options: {
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: true,
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return;
                        },
                        label: function(tooltipItem, data) {
                            return tooltipItem.xLabel + ' ' + tooltipItem.yLabel + ' kWh';
                        }
                    },
                    scales: {
                        xAxes: [{
                            barPercentage: 0.5,
                            barThickness: 6,
                            maxBarThickness: 8,
                            minBarLength: 20,
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 20,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        }
    );
});