	var numTapMaths = 0;
	var numTapPhysics = 0;
	var numTapChemistry = 0;
	var numTapPE = 0;
	var numTapRusLang = 0;
	var numTapLSF = 0;
	var numTapTechnology = 0;
	var numTapInformatics = 0;
	var numTapEngLang = 0;
	var numTapLiterature = 0;
	var numTapHistory = 0;
	var numTapGeography = 0;
	var numTapSocStudies = 0;
	var numTapBiology = 0;
	var numTapFSMCPR = 0;

function showHintText() {
		document.getElementById("hintText").style.display = "flex";
}

function delHintText() {
		document.getElementById("hintText").style.display = "none";
}

function openMaths() {
	if (numTapMaths) {
		document.getElementById("maths").style.maxHeight = "0";
		numTapMaths = 0;
	} else {
		document.getElementById("maths").style.maxHeight = "30rem";
		numTapMaths = 1;
	}
}

function openPhysics() {
	if (numTapPhysics) {
		document.getElementById("physics").style.maxHeight = "0";
		numTapPhysics = 0;
	} else {
		document.getElementById("physics").style.maxHeight = "20rem";
		numTapPhysics = 1;
	}
}

function openChemistry() {
	if (numTapChemistry) {
		document.getElementById("chemistry").style.maxHeight = "0";
		numTapChemistry = 0;
	} else {
		document.getElementById("chemistry").style.maxHeight = "20rem";
		numTapChemistry = 1;
	}
}

function openPE() {
	

	if (numTapPE) {
		document.getElementById("pe").style.maxHeight = "0";
		numTapPE = 0;
	} else {
		document.getElementById("pe").style.maxHeight = "20rem";
		numTapPE = 1;
	}
}

/* Russian Language */

function openRusLang() {

	if (numTapRusLang) {
		document.getElementById("rl").style.maxHeight = "0";
		numTapRusLang = 0;
	} else {
		document.getElementById("rl").style.maxHeight = "30rem";
		numTapRusLang = 1;
	}
}

function openLSF() {

	if (numTapLSF) {
		document.getElementById("lsf").style.maxHeight = "0";
		numTapLSF = 0;
	} else {
		document.getElementById("lsf").style.maxHeight = "20rem";
		numTapLSF = 1;
	}
}

function openTechnology() {

	if (numTapTechnology) {
		document.getElementById("technology").style.maxHeight = "0";
		numTapTechnology = 0;
	} else {
		document.getElementById("technology").style.maxHeight = "20rem";
		numTapTechnology = 1;
	}
}

function openInformatics() {

	if (numTapInformatics) {
		document.getElementById("informatics").style.maxHeight = "0";
		numTapInformatics = 0;
	} else {
		document.getElementById("informatics").style.maxHeight = "20rem";
		numTapInformatics = 1;
	}
}

function openEngLang() {

	if (numTapEngLang) {
		document.getElementById("el").style.maxHeight = "0";
		numTapEngLang = 0;
	} else {
		document.getElementById("el").style.maxHeight = "20rem";
		numTapEngLang = 1;
	}
}

function openLiterature() {

	if (numTapLiterature) {
		document.getElementById("literature").style.maxHeight = "0";
		numTapLiterature = 0;
	} else {
		document.getElementById("literature").style.maxHeight = "20rem";
		numTapLiterature = 1;
	}
}

function openHistory() {

	if (numTapHistory) {
		document.getElementById("history").style.maxHeight = "0";
		numTapHistory = 0;
	} else {
		document.getElementById("history").style.maxHeight = "20rem";
		numTapHistory = 1;
	}
}

function openGeography() {

	if (numTapGeography) {
		document.getElementById("geography").style.maxHeight = "0";
		numTapGeography = 0;
	} else {
		document.getElementById("geography").style.maxHeight = "20rem";
		numTapGeography = 1;
	}
}

function openSocStudies() {

	if (numTapSocStudies) {
		document.getElementById("sd").style.maxHeight = "0";
		numTapSocStudies = 0;
	} else {
		document.getElementById("sd").style.maxHeight = "20rem";
		numTapSocStudies = 1;
	}
}

function openBiology() {

	if (numTapBiology) {
		document.getElementById("biology").style.maxHeight = "0";
		numTapBiology = 0;
	} else {
		document.getElementById("biology").style.maxHeight = "20rem";
		numTapBiology = 1;
	}
}

function openFSMCPR() {

	if (numTapFSMCPR) {
		document.getElementById("odnknr").style.maxHeight = "0";
		numTapFSMCPR = 0;
	} else {
		document.getElementById("odnknr").style.maxHeight = "20rem";
		numTapFSMCPR = 1;
	}
}
