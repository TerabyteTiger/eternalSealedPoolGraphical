//Firestore //

const db = firebase.firestore();
var user;
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
			"FJS", // Winchest
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
			"Winchest",
		];
	}

	triChart.update();
}

// Variables
var primal = {
		count: document.getElementById("P").value,
		removal: document.getElementById("Pr").value,
		name: "Primal",
	},
	justice = {
		count: document.getElementById("J").value,
		removal: document.getElementById("Jr").value,
		name: "Justice",
	},
	time = {
		count: document.getElementById("T").value,
		removal: document.getElementById("Tr").value,
		name: "Time",
	},
	shadow = {
		count: document.getElementById("S").value,
		removal: document.getElementById("Sr").value,
		name: "Shadow",
	},
	fire = {
		count: document.getElementById("F").value,
		removal: document.getElementById("Fr").value,
		name: "Fire",
	},
	rakano = {
		count: document.getElementById("FJ").value,
		removal: document.getElementById("FJr").value,
		name: "Rakano",
		mono: 0,
		rec: 0,
		fix: document.getElementById("FJf").value,
	},
	argenport = {
		count: document.getElementById("JS").value,
		removal: document.getElementById("JSr").value,
		name: "Argenport",
		mono: 0,
		rec: 0,
		fix: document.getElementById("JSf").value,
	},
	hooru = {
		count: document.getElementById("JP").value,
		removal: document.getElementById("JPr").value,
		name: "Hooru",
		mono: 0,
		rec: 0,
		fix: document.getElementById("JPf").value,
	},
	combrei = {
		count: document.getElementById("JT").value,
		removal: document.getElementById("JTr").value,
		name: "Combrei",
		mono: 0,
		rec: 0,
		fix: document.getElementById("JTf").value,
	},
	stonescar = {
		count: document.getElementById("FS").value,
		removal: document.getElementById("FSr").value,
		name: "Stonescar",
		mono: 0,
		rec: 0,
		fix: document.getElementById("FSf").value,
	},
	skycrag = {
		count: document.getElementById("FP").value,
		removal: document.getElementById("FPr").value,
		name: "Skycrag",
		mono: 0,
		rec: 0,
		fix: document.getElementById("FPf").value,
	},
	praxis = {
		count: document.getElementById("FT").value,
		removal: document.getElementById("FTr").value,
		name: "Praxis",
		mono: 0,
		rec: 0,
		fix: document.getElementById("FTf").value,
	},
	feln = {
		count: document.getElementById("PS").value,
		removal: document.getElementById("PSr").value,
		name: "Feln",
		mono: 0,
		rec: 0,
		fix: document.getElementById("PSf").value,
	},
	xenan = {
		count: document.getElementById("ST").value,
		removal: document.getElementById("STr").value,
		name: "Xenan",
		mono: 0,
		rec: 0,
		fix: document.getElementById("STf").value,
	},
	elysian = {
		count: document.getElementById("PT").value,
		removal: document.getElementById("PTr").value,
		name: "Elysian",
		mono: 0,
		rec: 0,
		fix: document.getElementById("PTf").value,
	},
	jennev = {
		count: document.getElementById("FTP").value,
	},
	ixtun = {
		count: document.getElementById("FJP").value,
	},
	winchest = {
		count: document.getElementById("FJS").value,
	},
	kerendon = {
		count: document.getElementById("JST").value,
	},
	auralian = {
		count: document.getElementById("PST").value,
	},
	placeholder = {
		count: 0,
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
						shadow.count,
					],
					backgroundColor: [
						"rgba(255,99,132,0.4)",
						"rgba(54, 162, 235, 0.4)",
						"rgba(255, 206, 86, 0.4)",
						"rgba(75, 192, 192, 0.4)",
						"rgba(153, 102, 255, 0.4)",
					],
					borderColor: [
						"rgba(255,99,132,1)",
						"rgba(54, 162, 235, 1)",
						"rgba(255, 206, 86, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(153, 102, 255, 1)",
					],
					borderWidth: 1,
				},
				{
					label: "Removal",
					data: [
						fire.removal,
						primal.removal,
						time.removal,
						justice.removal,
						shadow.removal,
					],
					backgroundColor: [
						"rgba(255,99,132,0.2)" /*R*/,
						"rgba(54, 162, 235, 0.2)" /*U*/,
						"rgba(255, 206, 86, 0.2)" /*W*/,
						"rgba(75, 192, 192, 0.2)" /*G*/,
						"rgba(153, 102, 255, 0.2)" /*B*/,
					],
					borderColor: [
						"rgba(255,99,132,1)",
						"rgba(54, 162, 235, 1)",
						"rgba(255, 206, 86, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(153, 102, 255, 1)",
					],
					borderWidth: 1,
				},
			],
		},
		options: {
			legend: {
				display: false,
			},
			scales: {
				xAxes: [
					{
						stacked: true,
						ticks: {
							autoSkip: false,
						},
					},
				],
				yAxes: [
					{
						stacked: true,
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
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
				"Elysian",
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
						primal.count,
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
						"rgba(54, 162, 235, 0.4)",
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
						"rgba(54, 162, 235,14)",
					],
					borderWidth: 1,
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
						time.count,
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
						"rgba(255, 206, 86, 0.4)" /*W*/,
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
						"rgba(255, 206, 86,12)" /*W*/,
					],
					borderWidth: 1,
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
						elysian.count,
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
						"rgba(75, 75, 75, 0.4)" /*Gray*/,
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
						"rgba(75, 75, 75, 1)" /*Gray*/,
					],
					borderWidth: 1,
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
						elysian.removal,
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
						"rgba(75, 75, 75, 0.2)" /*Gray*/,
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
						"rgba(75, 75, 75, 1)" /*Gray*/,
					],
					borderWidth: 1,
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
						elysian.fix,
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
						"rgba(75, 75, 75, 0.7)" /*Gray*/,
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
						"rgba(75, 75, 75, 1)" /*Gray*/,
					],
					borderWidth: 1,
				},
			],
		},
		options: {
			legend: {
				display: false,
			},
			scales: {
				xAxes: [
					{
						stacked: true,
						ticks: {
							autoSkip: false,
						},
					},
				],
				yAxes: [
					{
						stacked: true,
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
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
				"Winchest",
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
						fire.count,
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
						"rgba(255,99,132,0.4)", //Fire
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
						"rgba(255,99,132,1)", //Fire
					],
					borderWidth: 1,
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
						justice.count,
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
						"rgba(75, 192, 192, 0.4)", //Justice
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
						"rgba(75, 192, 192, 1)", //Justice
					],
					borderWidth: 1,
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
						shadow.count,
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
						"rgba(153, 102, 255, 0.4)", //Shadow
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
						"rgba(153, 102, 255, 1)", //Shadow
					],
					borderWidth: 1,
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
						eval(elysian.count) + eval(elysian.removal),
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
						"rgba(75, 75, 75, 0.4)" /*Gray*/,
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
						"rgba(75, 75, 75, 1)" /*Gray*/,
					],
					borderWidth: 1,
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
						elysian.fix,
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
						"rgba(75, 75, 75, 0.7)" /*Gray*/,
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
						"rgba(75, 75, 75, 1)" /*Gray*/,
					],
					borderWidth: 1,
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
						winchest.count,
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
						"rgba(75, 75, 75, 0.95)" /*Gray*/,
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
						"rgba(75, 75, 75, 1)" /*Gray*/,
					],
					borderWidth: 1,
				},
			],
		},
		options: {
			legend: {
				display: false,
			},
			scales: {
				xAxes: [
					{
						stacked: true,
						ticks: {
							autoSkip: false,
						},
					},
				],
				yAxes: [
					{
						stacked: true,
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
	});
}

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

	//For logged in users//
	user = firebase.auth().currentUser;
	if (user) {
		db.collection("users")
			.doc(user.email)
			.update({
				tri: {
					playables: {
						jennev: jennev.count,
						ixtun: ixtun.count,
						winchest: winchest.count,
						kerendon: kerendon.count,
						auralian: auralian.count,
					},
				},
			});
	}
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

	//For logged in users//
	user = firebase.auth().currentUser;
	if (user) {
		db.collection("users")
			.doc(user.email)
			.update({
				mono: {
					playables: {
						fire: fire.count,
						time: time.count,
						justice: justice.count,
						primal: primal.count,
						shadow: shadow.count,
					},
					removal: {
						fire: fire.removal,
						time: time.removal,
						justice: justice.removal,
						primal: primal.removal,
						shadow: shadow.removal,
					},
				},
			});
	}

	chartdata = [primal, justice, time, shadow, fire];
	bestCount = chartdata.reduce(
		(max, objectIn) =>
			Math.max(eval(objectIn.count) + eval(objectIn.removal), max),
		0
	);
	bestMono = "";
	for (var i = 0; i < chartdata.length; i++) {
		if (eval(chartdata[i].count) + eval(chartdata[i].removal) == bestCount) {
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

	/** TODO: MOVE TRI COLOR ABOVE AND USE getElement 1x**/
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

	//For logged in users//
	user = firebase.auth().currentUser;
	if (user) {
		db.collection("users")
			.doc(user.email)
			.update({
				dual: {
					playables: {
						praxis: praxis.count,
						rakano: rakano.count,
						combrei: combrei.count,
						elysian: elysian.count,
						hooru: hooru.count,
						argenport: argenport.count,
						skycrag: skycrag.count,
						feln: feln.count,
						stonescar: stonescar.count,
						xenan: xenan.count,
					},
					removal: {
						praxis: praxis.removal,
						rakano: rakano.removal,
						combrei: combrei.removal,
						elysian: elysian.removal,
						hooru: hooru.removal,
						argenport: argenport.removal,
						skycrag: skycrag.removal,
						feln: feln.removal,
						stonescar: stonescar.removal,
						xenan: xenan.removal,
					},
					fixing: {
						praxis: praxis.fix,
						rakano: rakano.fix,
						combrei: combrei.fix,
						elysian: elysian.fix,
						hooru: hooru.fix,
						argenport: argenport.fix,
						skycrag: skycrag.fix,
						feln: feln.fix,
						stonescar: stonescar.fix,
						xenan: xenan.fix,
					},
				},
			});
	}

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
		elysian,
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

firebase.auth().onAuthStateChanged(function(loggedUser) {
	if (loggedUser) {
		// Get User Record
		var docRef = db.collection("users").doc(loggedUser.email);
		docRef.get().then(function(doc) {
			if (doc.exists) {
				data = doc.data();
				// Pull in and refresh mono data & functions //
				document.getElementById("F").value = data.mono.playables.fire;
				document.getElementById("F").dispatchEvent(new Event("change"));

				document.getElementById("J").value = data.mono.playables.justice;
				document.getElementById("J").dispatchEvent(new Event("change"));

				document.getElementById("S").value = data.mono.playables.shadow;
				document.getElementById("S").dispatchEvent(new Event("change"));

				document.getElementById("T").value = data.mono.playables.time;
				document.getElementById("T").dispatchEvent(new Event("change"));

				document.getElementById("P").value = data.mono.playables.primal;
				document.getElementById("P").dispatchEvent(new Event("change"));

				document.getElementById("Fr").value = data.mono.removal.fire;
				document.getElementById("Fr").dispatchEvent(new Event("change"));

				document.getElementById("Jr").value = data.mono.removal.justice;
				document.getElementById("Jr").dispatchEvent(new Event("change"));

				document.getElementById("Sr").value = data.mono.removal.shadow;
				document.getElementById("Sr").dispatchEvent(new Event("change"));

				document.getElementById("Tr").value = data.mono.removal.time;
				document.getElementById("Tr").dispatchEvent(new Event("change"));

				document.getElementById("Pr").value = data.mono.removal.primal;
				document.getElementById("Pr").dispatchEvent(new Event("change"));

				// Dual //
				document.getElementById("FT").value = data.dual.playables.praxis;
				document.getElementById("FT").dispatchEvent(new Event("change"));

				document.getElementById("FJ").value = data.dual.playables.rakano;
				document.getElementById("FJ").dispatchEvent(new Event("change"));

				document.getElementById("JT").value = data.dual.playables.combrei;
				document.getElementById("JT").dispatchEvent(new Event("change"));

				document.getElementById("PT").value = data.dual.playables.elysian;
				document.getElementById("PT").dispatchEvent(new Event("change"));

				document.getElementById("JP").value = data.dual.playables.hooru;
				document.getElementById("JP").dispatchEvent(new Event("change"));

				document.getElementById("JS").value = data.dual.playables.argenport;
				document.getElementById("JS").dispatchEvent(new Event("change"));

				document.getElementById("FP").value = data.dual.playables.skycrag;
				document.getElementById("FP").dispatchEvent(new Event("change"));

				document.getElementById("PS").value = data.dual.playables.feln;
				document.getElementById("PS").dispatchEvent(new Event("change"));

				document.getElementById("FS").value = data.dual.playables.stonescar;
				document.getElementById("FS").dispatchEvent(new Event("change"));

				document.getElementById("ST").value = data.dual.playables.xenan;
				document.getElementById("ST").dispatchEvent(new Event("change"));

				//Dual Removal
				document.getElementById("FTr").value = data.dual.removal.praxis;
				document.getElementById("FTr").dispatchEvent(new Event("change"));

				document.getElementById("FJr").value = data.dual.removal.rakano;
				document.getElementById("FJr").dispatchEvent(new Event("change"));

				document.getElementById("JTr").value = data.dual.removal.combrei;
				document.getElementById("JTr").dispatchEvent(new Event("change"));

				document.getElementById("PTr").value = data.dual.removal.elysian;
				document.getElementById("PTr").dispatchEvent(new Event("change"));

				document.getElementById("JPr").value = data.dual.removal.hooru;
				document.getElementById("JPr").dispatchEvent(new Event("change"));

				document.getElementById("JSr").value = data.dual.removal.argenport;
				document.getElementById("JSr").dispatchEvent(new Event("change"));

				document.getElementById("FPr").value = data.dual.removal.skycrag;
				document.getElementById("FPr").dispatchEvent(new Event("change"));

				document.getElementById("PSr").value = data.dual.removal.feln;
				document.getElementById("PSr").dispatchEvent(new Event("change"));

				document.getElementById("FSr").value = data.dual.removal.stonescar;
				document.getElementById("FSr").dispatchEvent(new Event("change"));

				document.getElementById("STr").value = data.dual.removal.xenan;
				document.getElementById("STr").dispatchEvent(new Event("change"));

				//Dual Fixing
				document.getElementById("FTf").value = data.dual.fixing.praxis;
				document.getElementById("FTf").dispatchEvent(new Event("change"));

				document.getElementById("FJf").value = data.dual.fixing.rakano;
				document.getElementById("FJf").dispatchEvent(new Event("change"));

				document.getElementById("JTf").value = data.dual.fixing.combrei;
				document.getElementById("JTf").dispatchEvent(new Event("change"));

				document.getElementById("PTf").value = data.dual.fixing.elysian;
				document.getElementById("PTf").dispatchEvent(new Event("change"));

				document.getElementById("JPf").value = data.dual.fixing.hooru;
				document.getElementById("JPf").dispatchEvent(new Event("change"));

				document.getElementById("JSf").value = data.dual.fixing.argenport;
				document.getElementById("JSf").dispatchEvent(new Event("change"));

				document.getElementById("FPf").value = data.dual.fixing.skycrag;
				document.getElementById("FPf").dispatchEvent(new Event("change"));

				document.getElementById("PSf").value = data.dual.fixing.feln;
				document.getElementById("PSf").dispatchEvent(new Event("change"));

				document.getElementById("FSf").value = data.dual.fixing.stonescar;
				document.getElementById("FSf").dispatchEvent(new Event("change"));

				document.getElementById("STf").value = data.dual.fixing.xenan;
				document.getElementById("STf").dispatchEvent(new Event("change"));

				//Tri
				document.getElementById("FTP").value = data.tri.playables.jennev;
				document.getElementById("FTP").dispatchEvent(new Event("change"));

				document.getElementById("FJP").value = data.tri.playables.ixtun;
				document.getElementById("FJP").dispatchEvent(new Event("change"));

				document.getElementById("FJS").value = data.tri.playables.winchest;
				document.getElementById("FJS").dispatchEvent(new Event("change"));

				document.getElementById("JST").value = data.tri.playables.kerendon;
				document.getElementById("JST").dispatchEvent(new Event("change"));

				document.getElementById("PST").value = data.tri.playables.auralian;
				document.getElementById("PST").dispatchEvent(new Event("change"));
			} else {
				console.log("Creating Document");
				const email = loggedUser.email;
				db.collection("users")
					.doc(email)
					.set({
						user: email,
						mono: {
							playables: {
								fire: 0,
								time: 0,
								justice: 0,
								primal: 0,
								shadow: 0,
							},
							removal: {
								fire: 0,
								time: 0,
								justice: 0,
								primal: 0,
								shadow: 0,
							},
						},
						dual: {
							playables: {
								praxis: 0,
								rakano: 0,
								combrei: 0,
								elysian: 0,
								hooru: 0,
								argenport: 0,
								skycrag: 0,
								feln: 0,
								stonescar: 0,
								xenan: 0,
							},
							removal: {
								praxis: 0,
								rakano: 0,
								combrei: 0,
								elysian: 0,
								hooru: 0,
								argenport: 0,
								skycrag: 0,
								feln: 0,
								stonescar: 0,
								xenan: 0,
							},
							fixing: {
								praxis: 0,
								rakano: 0,
								combrei: 0,
								elysian: 0,
								hooru: 0,
								argenport: 0,
								skycrag: 0,
								feln: 0,
								stonescar: 0,
								xenan: 0,
							},
						},
						tri: {
							playables: {
								jennev: 0,
								ixtun: 0,
								winchest: 0,
								kerendon: 0,
								auralian: 0,
							},
						},
					})
					.catch(function(error) {
						console.error("Error adding document: ", error);
					});
			}
		});
	} else {
		console.log("Not logged in");
	}
});
