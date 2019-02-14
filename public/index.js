//Toggle Labels - UN, F
var triLabelMode = "UN";
function toggleTriLabels() {
    if (triLabelMode == "UN") {
        triLabelMode = "F";
        triChart.data.labels = [
            "PST", // Auralia
            "FPT", // Jennev
            "FST",
            "FPS",
            "JPT",
            "JST", // Kerendon
            "JPS",
            "FJT",
            "FJP", // Ixtun
            "FJS" // Winchest
        ];
    } else {
        triLabelMode = "UN";
        triChart.data.labels = [
            "Auralian",
            "Jennev",
            "unHooru",
            "unCombrei",
            "unStonescar",
            "Kerendon",
            "unPraxis",
            "unFeln",
            "Ixtun",
            "Winchest"
        ];
    }

    triChart.update();
}

// Variables
var primal = {
        count: document.getElementById("P").value,
        removal: document.getElementById("Pr").value,
        name: "Primal"
    },
    justice = {
        count: document.getElementById("J").value,
        removal: document.getElementById("Jr").value,
        name: "Justice"
    },
    time = {
        count: document.getElementById("T").value,
        removal: document.getElementById("Tr").value,
        name: "Time"
    },
    shadow = {
        count: document.getElementById("S").value,
        removal: document.getElementById("Sr").value,
        name: "Shadow"
    },
    fire = {
        count: document.getElementById("F").value,
        removal: document.getElementById("Fr").value,
        name: "Fire"
    },
    rakano = {
        count: document.getElementById("FJ").value,
        removal: document.getElementById("FJr").value,
        name: "Rakano",
        mono: 0,
        rec: 0,
        fix: document.getElementById("FJf").value
    },
    argenport = {
        count: document.getElementById("JS").value,
        removal: document.getElementById("JSr").value,
        name: "Argenport",
        mono: 0,
        rec: 0,
        fix: document.getElementById("JSf").value
    },
    hooru = {
        count: document.getElementById("JP").value,
        removal: document.getElementById("JPr").value,
        name: "Hooru",
        mono: 0,
        rec: 0,
        fix: document.getElementById("JPf").value
    },
    combrei = {
        count: document.getElementById("JT").value,
        removal: document.getElementById("JTr").value,
        name: "Combrei",
        mono: 0,
        rec: 0,
        fix: document.getElementById("JTf").value
    },
    stonescar = {
        count: document.getElementById("FS").value,
        removal: document.getElementById("FSr").value,
        name: "Stonescar",
        mono: 0,
        rec: 0,
        fix: document.getElementById("FSf").value
    },
    skycrag = {
        count: document.getElementById("FP").value,
        removal: document.getElementById("FPr").value,
        name: "Skycrag",
        mono: 0,
        rec: 0,
        fix: document.getElementById("FPf").value
    },
    praxis = {
        count: document.getElementById("FT").value,
        removal: document.getElementById("FTr").value,
        name: "Praxis",
        mono: 0,
        rec: 0,
        fix: document.getElementById("FTf").value
    },
    feln = {
        count: document.getElementById("PS").value,
        removal: document.getElementById("PSr").value,
        name: "Feln",
        mono: 0,
        rec: 0,
        fix: document.getElementById("PSf").value
    },
    xenan = {
        count: document.getElementById("ST").value,
        removal: document.getElementById("STr").value,
        name: "Xenan",
        mono: 0,
        rec: 0,
        fix: document.getElementById("STf").value
    },
    elysian = {
        count: document.getElementById("PT").value,
        removal: document.getElementById("PTr").value,
        name: "Elysian",
        mono: 0,
        rec: 0,
        fix: document.getElementById("PTf").value
    },
    jennev = {
        count: document.getElementById("FTP").value
    },
    ixtun = {
        count: document.getElementById("FJP").value
    },
    winchest = {
        count: document.getElementById("FJS").value
    },
    kerendon = {
        count: document.getElementById("JST").value
    },
    auralian = {
        count: document.getElementById("PST").value
    },
    placeholder = {
        count: 0
    };

var ctx = document.getElementById("myChart");
var ctx2 = document.getElementById("dualChart");

var ctx4 = document.getElementById("triChart");
var myChart, dualChart, triChart, bestCount, bestMono, bestDual;

// Init
monoRec();
dualRec();
initialize();

// Chart.js
Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
function initialize() {
    /********** MONO TABLE ************************/
    myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Fire", "Primal", "Time", "Justice", "Shadow"],
            datasets: [
                {
                    label: "Count",
                    data: [
                        fire.count,
                        primal.count,
                        time.count,
                        justice.count,
                        shadow.count
                    ],
                    backgroundColor: [
                        "rgba(255,99,132,0.4)",
                        "rgba(54, 162, 235, 0.4)",
                        "rgba(255, 206, 86, 0.4)",
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(153, 102, 255, 0.4)"
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)"
                    ],
                    borderWidth: 1
                },
                {
                    label: "Removal",
                    data: [
                        fire.removal,
                        primal.removal,
                        time.removal,
                        justice.removal,
                        shadow.removal
                    ],
                    backgroundColor: [
                        "rgba(255,99,132,0.2)" /*R*/,
                        "rgba(54, 162, 235, 0.2)" /*U*/,
                        "rgba(255, 206, 86, 0.2)" /*W*/,
                        "rgba(75, 192, 192, 0.2)" /*G*/,
                        "rgba(153, 102, 255, 0.2)" /*B*/
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)"
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        ticks: {
                            autoSkip: false
                        }
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    });
    /********** DUAL TABLE ************************/
    dualChart = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: [
                "Rakano",
                "Argenport",
                "Hooru",
                "Combrei",
                "Stonescar",
                "Skycrag",
                "Praxis",
                "Feln",
                "Xenan",
                "Elysian"
            ],
            datasets: [
                {
                    label: "Playables - Mono 1",
                    data: [
                        fire.count,
                        justice.count,
                        justice.count,
                        justice.count,
                        fire.count,
                        fire.count,
                        fire.count,
                        primal.count,
                        shadow.count,
                        primal.count
                    ],
                    backgroundColor: [
                        "rgba(255,99,132,0.4)", //Fire
                        "rgba(75, 192, 192, 0.4)", //Justice
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(255,99,132,0.4)",
                        "rgba(255,99,132,0.4)",
                        "rgba(255,99,132,0.4)",
                        "rgba(54, 162, 235, 0.4)", //Primal
                        "rgba(153, 102, 255, 0.4)", //Shadow
                        "rgba(54, 162, 235, 0.4)"
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(255,99,132,1)",
                        "rgba(255,99,132,1)",
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235,14)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(54, 162, 235,14)"
                    ],
                    borderWidth: 1
                },
                {
                    label: "Playable - Mono 2",
                    data: [
                        justice.count,
                        shadow.count,
                        primal.count,
                        time.count,
                        shadow.count,
                        primal.count,
                        time.count,
                        shadow.count,
                        time.count,
                        time.count
                    ],
                    backgroundColor: [
                        "rgba(75, 192, 192, 0.4)" /*G*/,
                        "rgba(153, 102, 255,0.4)" /*B*/,
                        "rgba(54, 162, 235, 0.4)" /*U*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/,
                        "rgba(153, 102, 255,0.4)" /*B*/,
                        "rgba(54, 162, 235, 0.4)" /*U*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/,
                        "rgba(153, 102, 255,0.4)" /*B*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/,
                        "rgba(255, 206, 86, 0.4)" /*W*/
                    ],
                    borderColor: [
                        "rgba(75, 192, 192, 1)" /*G*/,
                        "rgba(153, 102, 255, 1)" /*B*/,
                        "rgba(54, 162, 235, 1)" /*U*/,
                        "rgba(255, 206, 86, 1)" /*W*/,
                        "rgba(153, 102, 255, 1)" /*B*/,
                        "rgba(54, 162, 235, 1)" /*U*/,
                        "rgba(255, 206, 86, 1)" /*W*/,
                        "rgba(153, 102, 255, 1)" /*B*/,
                        "rgba(255, 206, 86, 1)" /*W*/,
                        "rgba(255, 206, 86,12)" /*W*/
                    ],
                    borderWidth: 1
                },
                {
                    label: "Playables - Dual",
                    data: [
                        rakano.count,
                        argenport.count,
                        hooru.count,
                        combrei.count,
                        stonescar.count,
                        skycrag.count,
                        praxis.count,
                        feln.count,
                        xenan.count,
                        elysian.count
                    ],
                    backgroundColor: [
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/
                    ],
                    borderColor: [
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/
                    ],
                    borderWidth: 1
                },
                {
                    label: "Removal - Dual",
                    data: [
                        rakano.removal,
                        argenport.removal,
                        hooru.removal,
                        combrei.removal,
                        stonescar.removal,
                        skycrag.removal,
                        praxis.removal,
                        feln.removal,
                        xenan.removal,
                        elysian.removal
                    ],
                    backgroundColor: [
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/,
                        "rgba(75, 75, 75, 0.2)" /*Gray*/
                    ],
                    borderColor: [
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/
                    ],
                    borderWidth: 1
                },
                {
                    label: "Fixing",
                    data: [
                        rakano.fix,
                        argenport.fix,
                        hooru.fix,
                        combrei.fix,
                        stonescar.fix,
                        skycrag.fix,
                        praxis.fix,
                        feln.fix,
                        xenan.fix,
                        elysian.fix
                    ],
                    backgroundColor: [
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/
                    ],
                    borderColor: [
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        ticks: {
                            autoSkip: false
                        }
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    });

    /********** TRI-COLOR TABLE ************************/
    triChart = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: [
                "Auralian",
                "Jennev",
                "unHooru",
                "unCombrei",
                "unStonescar",
                "Kerendon",
                "unPraxis",
                "unFeln",
                "Ixtun",
                "Winchest"
            ],
            datasets: [
                {
                    label: "Playables - Mono 1", //[0]
                    data: [
                        primal.count,
                        fire.count,
                        fire.count,
                        fire.count,
                        justice.count,
                        justice.count,
                        justice.count,
                        fire.count,
                        fire.count,
                        fire.count
                    ],
                    backgroundColor: [
                        "rgba(54, 162, 235, 0.4)", //Primal
                        "rgba(255,99,132,0.4)", //Fire
                        "rgba(255,99,132,0.4)", //Fire
                        "rgba(255,99,132,0.4)", //Fire
                        "rgba(75, 192, 192, 0.4)", //Justice
                        "rgba(75, 192, 192, 0.4)", //Justice
                        "rgba(75, 192, 192, 0.4)", //Justice
                        "rgba(255,99,132,0.4)", //Fire
                        "rgba(255,99,132,0.4)", //Fire
                        "rgba(255,99,132,0.4)" //Fire
                    ],
                    borderColor: [
                        "rgba(54, 162, 235, 1)", //Primal
                        "rgba(255,99,132,1)", //Fire
                        "rgba(255,99,132,1)", //Fire
                        "rgba(255,99,132,1)", //Fire
                        "rgba(75, 192, 192, 1)", //Justice
                        "rgba(75, 192, 192, 1)", //Justice
                        "rgba(75, 192, 192, 1)", //Justice
                        "rgba(255,99,132,1)", //Fire
                        "rgba(255,99,132,1)", //Fire
                        "rgba(255,99,132,1)" //Fire
                    ],
                    borderWidth: 1
                },
                {
                    label: "Playable - Mono 2", //[1]
                    data: [
                        shadow.count,
                        primal.count,
                        shadow.count,
                        primal.count,
                        primal.count,
                        shadow.count,
                        primal.count,
                        justice.count,
                        justice.count,
                        justice.count
                    ],
                    backgroundColor: [
                        "rgba(153, 102, 255, 0.4)", //Shadow
                        "rgba(54, 162, 235, 0.4)", //Primal
                        "rgba(153, 102, 255, 0.4)", //Shadow
                        "rgba(54, 162, 235, 0.4)", //Primal
                        "rgba(54, 162, 235, 0.4)", //Primal
                        "rgba(153, 102, 255, 0.4)", //Shadow
                        "rgba(54, 162, 235, 0.4)", //Primal
                        "rgba(75, 192, 192, 0.4)", //Justice
                        "rgba(75, 192, 192, 0.4)", //Justice
                        "rgba(75, 192, 192, 0.4)" //Justice
                    ],
                    borderColor: [
                        "rgba(153, 102, 255, 1)", //Shadow
                        "rgba(54, 162, 235, 1)", //Primal
                        "rgba(153, 102, 255, 1)", //Shadow
                        "rgba(54, 162, 235, 1)", //Primal
                        "rgba(54, 162, 235, 1)", //Primal
                        "rgba(153, 102, 255, 1)", //Shadow
                        "rgba(54, 162, 235, 1)", //Primal
                        "rgba(75, 192, 192, 1)", //Justice
                        "rgba(75, 192, 192, 1)", //Justice
                        "rgba(75, 192, 192, 1)" //Justice
                    ],
                    borderWidth: 1
                },
                {
                    label: "Playable - Mono 3", //[2]
                    data: [
                        time.count,
                        time.count,
                        time.count,
                        shadow.count,
                        time.count,
                        time.count,
                        shadow.count,
                        time.count,
                        primal.count,
                        shadow.count
                    ],
                    backgroundColor: [
                        "rgba(255, 206, 86, 0.4)", //Time
                        "rgba(255, 206, 86, 0.4)", //Time
                        "rgba(255, 206, 86, 0.4)", //Time
                        "rgba(153, 102, 255, 0.4)", //Shadow
                        "rgba(255, 206, 86, 0.4)", //Time
                        "rgba(255, 206, 86, 0.4)", //Time
                        "rgba(153, 102, 255, 0.4)", //Shadow
                        "rgba(255, 206, 86, 0.4)", //Time
                        "rgba(54, 162, 235, 0.4)", //Primal
                        "rgba(153, 102, 255, 0.4)" //Shadow
                    ],
                    borderColor: [
                        "rgba(255, 206, 86, 1)", //Time
                        "rgba(255, 206, 86, 1)", //Time
                        "rgba(255, 206, 86, 1)", //Time
                        "rgba(153, 102, 255, 1)", //Shadow
                        "rgba(255, 206, 86, 1)", //Time
                        "rgba(255, 206, 86, 1)", //Time
                        "rgba(153, 102, 255, 1)", //Shadow
                        "rgba(255, 206, 86, 1)", //Time
                        "rgba(54, 162, 235, 1)", //Primal
                        "rgba(153, 102, 255, 1)" //Shadow
                    ],
                    borderWidth: 1
                },
                {
                    label: "Duals", //[3]
                    data: [
                        eval(rakano.count) + eval(rakano.removal),
                        eval(argenport.count) + eval(argenport.removal),
                        eval(hooru.count) + eval(hooru.removal),
                        eval(combrei.count) + eval(combrei.removal),
                        eval(stonescar.count) + eval(stonescar.removal),
                        eval(skycrag.count) + eval(skycrag.removal),
                        eval(praxis.count) + eval(praxis.removal),
                        eval(feln.count) + eval(feln.removal),
                        eval(xenan.count) + eval(xenan.removal),
                        eval(elysian.count) + eval(elysian.removal)
                    ],
                    backgroundColor: [
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/,
                        "rgba(75, 75, 75, 0.4)" /*Gray*/
                    ],
                    borderColor: [
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/
                    ],
                    borderWidth: 1
                },
                {
                    label: "Fixing", //[4]
                    data: [
                        rakano.fix,
                        argenport.fix,
                        hooru.fix,
                        combrei.fix,
                        stonescar.fix,
                        skycrag.fix,
                        praxis.fix,
                        feln.fix,
                        xenan.fix,
                        elysian.fix
                    ],
                    backgroundColor: [
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/,
                        "rgba(75, 75, 75, 0.7)" /*Gray*/
                    ],
                    borderColor: [
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/
                    ],
                    borderWidth: 1
                },
                {
                    label: "TriFaction", //[5]
                    data: [
                        auralian.count,
                        jennev.count,
                        placeholder.count,
                        placeholder.count,
                        placeholder.count,
                        kerendon.count,
                        placeholder.count,
                        placeholder.count,
                        ixtun.count,
                        winchest.count
                    ],
                    backgroundColor: [
                        "rgba(75, 75, 75, 0.95)" /*Gray*/,
                        "rgba(75, 75, 75, 0.95)" /*Gray*/,
                        "rgba(75, 75, 75, 0.95)" /*Gray*/,
                        "rgba(75, 75, 75, 0.95)" /*Gray*/,
                        "rgba(75, 75, 75, 0.95)" /*Gray*/,
                        "rgba(75, 75, 75, 0.95)" /*Gray*/,
                        "rgba(75, 75, 75, 0.95)" /*Gray*/,
                        "rgba(75, 75, 75, 0.95)" /*Gray*/,
                        "rgba(75, 75, 75, 0.95)" /*Gray*/,
                        "rgba(75, 75, 75, 0.95)" /*Gray*/
                    ],
                    borderColor: [
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/,
                        "rgba(75, 75, 75, 1)" /*Gray*/
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        ticks: {
                            autoSkip: false
                        }
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    });
}
