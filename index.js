// Variables
    var primal = {
        count: document.getElementById('P').value,
        removal: document.getElementById('Pr').value,
        name: "Primal"
    },
        justice = {
            count: document.getElementById('J').value,
            removal: document.getElementById('Jr').value,
            name: "Justice"
        },
        time = {
            count: document.getElementById('T').value,
            removal: document.getElementById('Tr').value,
            name: "Time"
        },
        shadow = {
            count: document.getElementById('S').value,
            removal: document.getElementById('Sr').value,
            name: "Shadow"
        },
        fire = {
            count: document.getElementById('F').value,
            removal: document.getElementById('Fr').value,
            name: "Fire"
        }
    var ctx = document.getElementById("myChart");
    var ctx2 = document.getElementById("dualChart");
    var myChart, dualChart, bestCount, bestMono, bestRemoval

    // Init
    monoRec()
    initialize()

    // Chart.js Test 
    function initialize() {

        /********** MONO TABLE ************************/
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Fire", "Primal", "Time", "Justice", "Shadow"],
                datasets: [{
                    label: 'Count',
                    data: [fire.count, primal.count, time.count, justice.count, shadow.count],
                    backgroundColor: [
                        'rgba(255,99,132,0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 206, 86, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(153, 102, 255, 0.4)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Removal',
                    data: [fire.removal, primal.removal, time.removal, justice.removal, shadow.removal],
                    backgroundColor: [
                        'rgba(255,99,132,0.2)', /*R*/
                        'rgba(54, 162, 235, 0.2)', /*U*/
                        'rgba(255, 206, 86, 0.2)', /*W*/
                        'rgba(75, 192, 192, 0.2)', /*G*/
                        'rgba(153, 102, 255, 0.2)' /*B*/
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        /********** DUAL TABLE ************************/
        dualChart = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ["FJ", "JS", "JP", "JT", "FS", "FP", "FT", "SP", "ST", "PT"],
                datasets: [{
                    label: 'Playables',
                    data: [fire.count, justice.count, justice.count, justice.count, fire.count, fire.count, fire.count, shadow.count, shadow.count, primal.count],
                    backgroundColor: [
                        'rgba(255,99,132,0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(255,99,132,0.4)',
                        'rgba(255,99,132,0.4)',
                        'rgba(255,99,132,0.4)',
                        'rgba(153, 102, 255, 0.4)',
                        'rgba(153, 102, 255, 0.4)',
                        'rgba(54, 162, 235, 0.4)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(255,99,132,1)',
                        'rgba(255,99,132,1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(54, 162, 235,14)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Playables',
                    data: [fire.count, justice.count, justice.count, justice.count, fire.count, fire.count, fire.count, shadow.count, shadow.count, primal.count],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)', /*G*/
                        'rgba(153, 102, 255, 0.2)', /*B*/
                        'rgba(54, 162, 235, 0.2)', /*U*/
                        'rgba(255, 206, 86, 0.2)', /*W*/
                        'rgba(153, 102, 255, 0.2)', /*B*/
                        'rgba(54, 162, 235, 0.2)', /*U*/
                        'rgba(255, 206, 86, 0.2)', /*W*/
                        'rgba(54, 162, 235, 0.2)', /*U*/
                        'rgba(255, 206, 86, 0.2)', /*W*/
                        'rgba(255, 206, 86, 0.2)' /*W*/
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)', /*G*/
                        'rgba(153, 102, 255, 1)', /*B*/
                        'rgba(54, 162, 235, 1)', /*U*/
                        'rgba(255, 206, 86, 1)', /*W*/
                        'rgba(153, 102, 255, 1)', /*B*/
                        'rgba(54, 162, 235, 1)', /*U*/
                        'rgba(255, 206, 86, 1)', /*W*/
                        'rgba(54, 162, 235, 1)', /*U*/
                        'rgba(255, 206, 86, 1)', /*W*/
                        'rgba(255, 206, 86,12)' /*W*/
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }

    // Mono Playable Functions
    function monoIncrement(selector, indicator) {
        var inputField = document.getElementById(selector);
        inputField.stepUp();
        myChart.data.datasets[0].data[indicator] = inputField.value
        myChart.update()
        monoRec()
    }

    function monoDecrement(selector, indicator) {
        var inputField = document.getElementById(selector);
        inputField.stepDown();
        myChart.data.datasets[0].data[indicator] = inputField.value
        myChart.update()
        monoRec()
    }

    function monoPlayables(selector, indicator) {
        var inputField = document.getElementById(selector);
        myChart.data.datasets[0].data[indicator] = inputField.value
        myChart.update()
        monoRec()
    }

    // Mono Removal Functions
    function removalIncrement(selector, indicator) {
        var inputField = document.getElementById(selector);
        inputField.stepUp();
        myChart.data.datasets[1].data[indicator] = inputField.value
        myChart.update()
        monoRec()
    }

    function removalDecrement(selector, indicator) {
        var inputField = document.getElementById(selector);
        inputField.stepDown();
        myChart.data.datasets[1].data[indicator] = inputField.value
        myChart.update()
        monoRec()
    }

    function removalPlayables(selector, indicator) {
        var inputField = document.getElementById(selector);
        myChart.data.datasets[0].data[indicator] = inputField.value
        myChart.update()
        monoRec()
    }

    // Recommended Functions
    function monoRec() {
        // Playables
        primal.count = document.getElementById('P').value
        justice.count = document.getElementById('J').value
        time.count = document.getElementById('T').value
        shadow.count = document.getElementById('S').value
        fire.count = document.getElementById('F').value

        // Removal
        primal.removal = document.getElementById('Pr').value
        justice.removal = document.getElementById('Jr').value
        time.removal = document.getElementById('Tr').value
        shadow.removal = document.getElementById('Sr').value
        fire.removal = document.getElementById('Fr').value

        //  the data that powers the chart (legacy for D3; May not need? )
        chartdata = [primal, justice, time, shadow, fire];
        bestCount = chartdata.reduce((max, objectIn) => Math.max(eval(objectIn.count) + eval(objectIn.removal), max), 0)
        bestMono = ""
        for (var i = 0; i < chartdata.length; i++) {
            if (eval(chartdata[i].count) + eval(chartdata[i].removal) == bestCount) {
                bestMono = chartdata[i].name
            }
        }
        document.getElementById("bestMono").innerHTML = "<b>Best: </b>" + bestMono
        return bestMono
    }