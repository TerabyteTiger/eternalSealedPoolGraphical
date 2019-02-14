// Mono Playable Functions
function monoIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepUp();
    myChart.data.datasets[0].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
    monoUpdateTri(selector);
}

function monoDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepDown();
    myChart.data.datasets[0].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
    monoUpdateTri(selector);
}

function monoPlayables(selector, indicator) {
    var inputField = document.getElementById(selector);
    myChart.data.datasets[0].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
    monoUpdateTri(selector);
}

// Mono Removal Functions
function removalIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepUp();
    myChart.data.datasets[1].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
    monoUpdateTri(selector);
}

function removalDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepDown();
    myChart.data.datasets[1].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
    monoUpdateTri(selector);
}

function removalPlayables(selector, indicator) {
    var inputField = document.getElementById(selector);
    myChart.data.datasets[1].data[indicator] = inputField.value;
    myChart.update();
    monoRec();
    monoUpdateDual(selector);
    monoUpdateTri(selector);
}

// Dual Playable Functions
function dualIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");

    inputField.stepUp();
    dualChart.data.datasets[2].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);
    dualChart.update();
    dualRec();
    dualUpdateTri();
}

function dualDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");
    inputField.stepDown();
    dualChart.data.datasets[2].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);
    dualChart.update();
    dualRec();
    dualUpdateTri();
}

function dualPlayables(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");
    dualChart.data.datasets[2].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);
    dualChart.update();
    dualRec();
    dualUpdateTri();
}

// Dual Removal Functions
function dualRemovalIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");
    inputField.stepUp();
    dualChart.data.datasets[3].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);

    dualChart.update();
    dualRec();
    dualUpdateTri();
}

function dualRemovalDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");
    inputField.stepDown();
    dualChart.data.datasets[3].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);

    dualChart.update();
    dualRec();
    dualUpdateTri();
}

function dualRemovalPlayables(selector, indicator) {
    var inputField = document.getElementById(selector);
    var inOne = document.getElementById(selector[0]);
    var inTwo = document.getElementById(selector[1]);
    var inOneR = document.getElementById(selector[0] + "r");
    var inTwoR = document.getElementById(selector[1] + "r");
    dualChart.data.datasets[3].data[indicator] = inputField.value;
    dualChart.data.datasets[0].data[indicator] =
        eval(inOne.value) + eval(inOneR.value);
    dualChart.data.datasets[1].data[indicator] =
        eval(inTwo.value) + eval(inTwoR.value);

    dualChart.update();
    dualRec();
    dualUpdateTri();
}

// Dual Fixing Functions
function fixRemovalIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepUp();
    dualChart.data.datasets[4].data[indicator] = inputField.value;
    dualChart.update();
    fixRec();
    fixUpdateTri();
}

function fixRemovalDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepDown();
    dualChart.data.datasets[4].data[indicator] = inputField.value;
    dualChart.update();
    fixRec();
    fixUpdateTri();
}

function fixRemovalPlayables(selector, indicator) {
    var inputField = document.getElementById(selector);
    dualChart.data.datasets[4].data[indicator] = inputField.value;
    dualChart.update();
    fixRec();
    fixUpdateTri();
}

//Tri Functions
function triDataDecrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepDown();
    triChart.data.datasets[5].data[indicator] = inputField.value;
    triChart.update();
    updateTriVars();
}

function triDataIncrement(selector, indicator) {
    var inputField = document.getElementById(selector);
    inputField.stepUp();
    triChart.data.datasets[5].data[indicator] = inputField.value;
    triChart.update();
    updateTriVars();
}

function triData(selector, indicator) {
    var inputField = document.getElementById(selector);
    triChart.data.datasets[5].data[indicator] = inputField.value;
    triChart.update();
    updateTriVars();
}

function updateTriVars() {
    jennev.count = document.getElementById("FTP").value;
    ixtun.count = document.getElementById("FJP").value;
    winchest.count = document.getElementById("FJS").value;
    kerendon.count = document.getElementById("JST").value;
    auralian.count = document.getElementById("PST").value;
}

// Recommended Functions
function monoRec() {
    // Playables
    primal.count = document.getElementById("P").value;
    justice.count = document.getElementById("J").value;
    time.count = document.getElementById("T").value;
    shadow.count = document.getElementById("S").value;
    fire.count = document.getElementById("F").value;

    // Removal
    primal.removal = document.getElementById("Pr").value;
    justice.removal = document.getElementById("Jr").value;
    time.removal = document.getElementById("Tr").value;
    shadow.removal = document.getElementById("Sr").value;
    fire.removal = document.getElementById("Fr").value;

    chartdata = [primal, justice, time, shadow, fire];
    bestCount = chartdata.reduce(
        (max, objectIn) =>
            Math.max(eval(objectIn.count) + eval(objectIn.removal), max),
        0
    );
    bestMono = "";
    for (var i = 0; i < chartdata.length; i++) {
        if (
            eval(chartdata[i].count) + eval(chartdata[i].removal) ==
            bestCount
        ) {
            bestMono = chartdata[i].name;
        }
    }
    document.getElementById("bestMono").innerHTML =
        "<h2>Mono Color: </br>" + bestMono + "</h2>";
    /* Call dualRec()*/
    dualRec();
    return bestMono;
}

function dualRec() {
    // Set Recs
    rakano.rec =
        eval(document.getElementById("FJ").value) +
        eval(document.getElementById("FJr").value);
    rakano.mono =
        eval(document.getElementById("J").value) +
        eval(document.getElementById("F").value) +
        eval(document.getElementById("Jr").value) +
        eval(document.getElementById("Fr").value);
    argenport.rec =
        eval(document.getElementById("JS").value) +
        eval(document.getElementById("JSr").value);
    argenport.mono =
        eval(document.getElementById("J").value) +
        eval(document.getElementById("S").value) +
        eval(document.getElementById("Jr").value) +
        eval(document.getElementById("Sr").value);
    hooru.rec =
        eval(document.getElementById("JP").value) +
        eval(document.getElementById("JPr").value);
    hooru.mono =
        eval(document.getElementById("J").value) +
        eval(document.getElementById("P").value) +
        eval(document.getElementById("Jr").value) +
        eval(document.getElementById("Pr").value);
    combrei.rec =
        eval(document.getElementById("JT").value) +
        eval(document.getElementById("JTr").value);
    combrei.mono =
        eval(document.getElementById("J").value) +
        eval(document.getElementById("T").value) +
        eval(document.getElementById("Jr").value) +
        eval(document.getElementById("Tr").value);
    stonescar.rec =
        eval(document.getElementById("FS").value) +
        eval(document.getElementById("FSr").value);
    stonescar.mono =
        eval(document.getElementById("F").value) +
        eval(document.getElementById("S").value) +
        eval(document.getElementById("Fr").value) +
        eval(document.getElementById("Sr").value);
    skycrag.rec =
        eval(document.getElementById("FP").value) +
        eval(document.getElementById("FPr").value);
    skycrag.mono =
        eval(document.getElementById("F").value) +
        eval(document.getElementById("P").value) +
        eval(document.getElementById("Fr").value) +
        eval(document.getElementById("Pr").value);
    praxis.rec =
        eval(document.getElementById("FT").value) +
        eval(document.getElementById("FTr").value);
    praxis.mono =
        eval(document.getElementById("F").value) +
        eval(document.getElementById("T").value) +
        eval(document.getElementById("Fr").value) +
        eval(document.getElementById("Tr").value);
    feln.rec =
        eval(document.getElementById("PS").value) +
        eval(document.getElementById("PSr").value);
    feln.mono =
        eval(document.getElementById("S").value) +
        eval(document.getElementById("P").value) +
        eval(document.getElementById("Sr").value) +
        eval(document.getElementById("Pr").value);
    xenan.rec =
        eval(document.getElementById("ST").value) +
        eval(document.getElementById("STr").value);
    xenan.mono =
        eval(document.getElementById("S").value) +
        eval(document.getElementById("T").value) +
        eval(document.getElementById("Sr").value) +
        eval(document.getElementById("Tr").value);
    elysian.rec =
        eval(document.getElementById("PT").value) +
        eval(document.getElementById("PTr").value);
    elysian.mono =
        eval(document.getElementById("P").value) +
        eval(document.getElementById("T").value) +
        eval(document.getElementById("Pr").value) +
        eval(document.getElementById("Tr").value);

    /** Update counts for tri colors**/
    rakano.count = document.getElementById("FJ").value;
    argenport.count = document.getElementById("JS").value;
    hooru.count = document.getElementById("JP").value;
    combrei.count = document.getElementById("JT").value;
    stonescar.count = document.getElementById("FS").value;
    skycrag.count = document.getElementById("FP").value;
    praxis.count = document.getElementById("FT").value;
    feln.count = document.getElementById("PS").value;
    xenan.count = document.getElementById("ST").value;
    elysian.count = document.getElementById("PT").value;
    /** Removal for tri colors **/
    rakano.removal = document.getElementById("FJr").value;
    argenport.removal = document.getElementById("JSr").value;
    hooru.removal = document.getElementById("JPr").value;
    combrei.removal = document.getElementById("JTr").value;
    stonescar.removal = document.getElementById("FSr").value;
    skycrag.removal = document.getElementById("FPr").value;
    praxis.removal = document.getElementById("FTr").value;
    feln.removal = document.getElementById("PSr").value;
    xenan.removal = document.getElementById("STr").value;
    elysian.removal = document.getElementById("PTr").value;

    chartdata = [
        rakano,
        argenport,
        hooru,
        combrei,
        stonescar,
        skycrag,
        praxis,
        feln,
        xenan,
        elysian
    ];
    bestCount = chartdata.reduce(
        (max, objectIn) =>
            Math.max(
                eval(objectIn.rec) + eval(objectIn.mono) + eval(objectIn.fix),
                max
            ),
        0
    );
    bestDual = "";
    for (var i = 0; i < chartdata.length; i++) {
        if (
            eval(chartdata[i].rec) +
                eval(chartdata[i].fix) +
                eval(chartdata[i].mono) ==
            bestCount
        ) {
            bestDual = chartdata[i].name;
        }
    }
    document.getElementById("bestDual").innerHTML =
        "<h2>Dual Color: </br>" + bestDual + "</h2>";
    return bestDual;
}

function fixRec() {
    rakano.fix = document.getElementById("FJf").value;
    argenport.fix = document.getElementById("JSf").value;
    hooru.fix = document.getElementById("JPf").value;
    combrei.fix = document.getElementById("JTf").value;
    stonescar.fix = document.getElementById("FSf").value;
    skycrag.fix = document.getElementById("FPf").value;
    praxis.fix = document.getElementById("FTf").value;
    feln.fix = document.getElementById("PSf").value;
    xenan.fix = document.getElementById("STf").value;
    elysian.fix = document.getElementById("PTf").value;
    /* Call dualRec() */
    dualRec();
    return "";
}

function monoUpdateDual(selector) {
    if (selector[0] == "F") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        dualChart.data.datasets[0].data[0] = total;
        dualChart.data.datasets[0].data[4] = total;
        dualChart.data.datasets[0].data[5] = total;
        dualChart.data.datasets[0].data[6] = total;
    } else if (selector[0] == "J") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        dualChart.data.datasets[0].data[1] = total;
        dualChart.data.datasets[0].data[2] = total;
        dualChart.data.datasets[0].data[3] = total;
        dualChart.data.datasets[1].data[0] = total;
    } else if (selector[0] == "T") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        dualChart.data.datasets[1].data[3] = total;
        dualChart.data.datasets[1].data[6] = total;
        dualChart.data.datasets[1].data[8] = total;
        dualChart.data.datasets[1].data[9] = total;
    } else if (selector[0] == "S") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        dualChart.data.datasets[1].data[7] = total;
        dualChart.data.datasets[0].data[8] = total;
        dualChart.data.datasets[1].data[1] = total;
        dualChart.data.datasets[1].data[4] = total;
    } else if (selector[0] == "P") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        dualChart.data.datasets[0].data[9] = total;
        dualChart.data.datasets[0].data[7] = total;
        dualChart.data.datasets[1].data[5] = total;
        dualChart.data.datasets[1].data[2] = total;
    } else {
        console.log("ERROR UPDATING DUAL CHART");
    }
    dualChart.update();
}

// Tri Chart Functions
function monoUpdateTri(selector) {
    if (selector[0] == "F") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        triChart.data.datasets[0].data[1] = total;
        triChart.data.datasets[0].data[2] = total;
        triChart.data.datasets[0].data[3] = total;
        triChart.data.datasets[0].data[7] = total;
        triChart.data.datasets[0].data[8] = total;
        triChart.data.datasets[0].data[9] = total;
    } else if (selector[0] == "J") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        triChart.data.datasets[0].data[4] = total;
        triChart.data.datasets[0].data[5] = total;
        triChart.data.datasets[0].data[6] = total;
        triChart.data.datasets[1].data[7] = total;
        triChart.data.datasets[1].data[8] = total;
        triChart.data.datasets[1].data[9] = total;
    } else if (selector[0] == "T") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        triChart.data.datasets[2].data[0] = total;
        triChart.data.datasets[2].data[1] = total;
        triChart.data.datasets[2].data[2] = total;
        triChart.data.datasets[2].data[4] = total;
        triChart.data.datasets[2].data[5] = total;
        triChart.data.datasets[2].data[7] = total;
    } else if (selector[0] == "S") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        triChart.data.datasets[1].data[0] = total;
        triChart.data.datasets[1].data[2] = total;
        triChart.data.datasets[2].data[3] = total;
        triChart.data.datasets[1].data[5] = total;
        triChart.data.datasets[2].data[6] = total;
        triChart.data.datasets[2].data[9] = total;
    } else if (selector[0] == "P") {
        var inOne = document.getElementById(selector[0]);
        var inOneR = document.getElementById(selector[0] + "r");
        var total = eval(inOne.value) + eval(inOneR.value);
        triChart.data.datasets[0].data[0] = total;
        triChart.data.datasets[1].data[1] = total;
        triChart.data.datasets[1].data[3] = total;
        triChart.data.datasets[1].data[4] = total;
        triChart.data.datasets[1].data[6] = total;
        triChart.data.datasets[2].data[8] = total;
    } else {
        console.log("ERROR UPDATING TRI CHART");
    }
    triChart.update();
}

function dualUpdateTri() {
    triChart.data.datasets[3].data[0] =
        eval(feln.rec) + eval(xenan.rec) + eval(elysian.rec);
    triChart.data.datasets[3].data[1] =
        eval(skycrag.rec) + eval(elysian.rec) + eval(praxis.rec);
    triChart.data.datasets[3].data[2] =
        eval(stonescar.rec) + eval(xenan.rec) + eval(praxis.rec);
    triChart.data.datasets[3].data[3] =
        eval(skycrag.rec) + eval(feln.rec) + eval(stonescar.rec);
    triChart.data.datasets[3].data[4] =
        eval(hooru.rec) + eval(elysian.rec) + eval(combrei.rec);
    triChart.data.datasets[3].data[5] =
        eval(argenport.rec) + eval(xenan.rec) + eval(combrei.rec);
    triChart.data.datasets[3].data[6] =
        eval(hooru.rec) + eval(feln.rec) + eval(argenport.rec);
    triChart.data.datasets[3].data[7] =
        eval(rakano.rec) + eval(combrei.rec) + eval(praxis.rec);
    triChart.data.datasets[3].data[8] =
        eval(rakano.rec) + eval(hooru.rec) + eval(skycrag.rec);
    triChart.data.datasets[3].data[9] =
        eval(rakano.rec) + eval(argenport.rec) + eval(stonescar.rec);
    triChart.update();
}

function fixUpdateTri() {
    triChart.data.datasets[4].data[0] =
        eval(feln.fix) + eval(xenan.fix) + eval(elysian.fix);
    triChart.data.datasets[4].data[1] =
        eval(skycrag.fix) + eval(elysian.fix) + eval(praxis.fix);
    triChart.data.datasets[4].data[2] =
        eval(stonescar.fix) + eval(xenan.fix) + eval(praxis.fix);
    triChart.data.datasets[4].data[3] =
        eval(skycrag.fix) + eval(feln.fix) + eval(stonescar.fix);
    triChart.data.datasets[4].data[4] =
        eval(hooru.fix) + eval(elysian.fix) + eval(combrei.fix);
    triChart.data.datasets[4].data[5] =
        eval(argenport.fix) + eval(xenan.fix) + eval(combrei.fix);
    triChart.data.datasets[4].data[6] =
        eval(hooru.fix) + eval(feln.fix) + eval(argenport.fix);
    triChart.data.datasets[4].data[7] =
        eval(rakano.fix) + eval(combrei.fix) + eval(praxis.fix);
    triChart.data.datasets[4].data[8] =
        eval(rakano.fix) + eval(hooru.fix) + eval(skycrag.fix);
    triChart.data.datasets[4].data[9] =
        eval(rakano.fix) + eval(argenport.fix) + eval(stonescar.fix);
    triChart.update();
}
