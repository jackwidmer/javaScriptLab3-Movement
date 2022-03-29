"use strict";
// Main site js file for Jack Widmer.
function _Initialize() {
	centerSun();
	let eButtons = document.getElementById('divButtons');
	let buttonsWidth = eButtons.offsetWidth;
	eButtons.style.left = ( (150 - buttonsWidth) / 2 ) + 'px';
	let buttonsHeight = eButtons.offsetHeight;
	eButtons.style.top = ( (100 - buttonsHeight) / 2 ) + 'px';
	console.log(`eButtons.style.left = ${eButtons.style.left}`);
	console.log(`eButtons.style.top = ${eButtons.style.top}`);
}

function centerSun() {
	let eSun = document.getElementById('imgSun');
	eSun.style.left = 385 + 'px';
	eSun.style.top = 175 + 'px';
}

let moveChange = 50;
function moveImage(e) {
	//console.debug(e);
	let eSun = document.getElementById('imgSun');
	switch(e.innerText) {
		case '▲':
			console.log(`eSun.style.top = ${eSun.style.top}`);
			let sunTop = parseInt(eSun.style.top);
			eSun.style.top = sunTop - moveChange + 'px';
			break;
		case '⯇':
			console.log(`eSun.style.left = ${eSun.style.left}`);
			let sunLeft = parseInt(eSun.style.left);
			eSun.style.left = sunLeft - moveChange + 'px';
			break;
		case '■':
			centerSun();
			break;
		case '⯈':
			console.log(`eSun.style.right = ${eSun.style.left}`);
			let sunRight = parseInt(eSun.style.left);
			eSun.style.left = sunRight + moveChange + 'px';
			break;
		case '▼':
			console.log(`eSun.style.bottom = ${eSun.style.top}`);
			let sunBottom = parseInt(eSun.style.top);
			eSun.style.top = sunBottom + moveChange + 'px';
			break;
	}
}
