let transObject = [];

function getTrans() {
	const transNameValue = document.getElementById('transName');
	const transAmountValue = document.getElementById('transAmount');
	const transButtonValue = document.getElementById('transButton');

	transButtonValue.addEventListener('click', function() {
		if (transNameValue.value === '' || transAmountValue.value === '') {
			console.log(
				`Stop! transaction name: ${transNameValue.value} | amount: ${transAmountValue.value}`
			);
			alert('Incomplete Entry!');
		} else {
			console.log(
				`Proceed! transaction name: ${transNameValue.value} | amount: ${transAmountValue.value}`
			);
			transObject.push(transNameValue.value, transAmountValue.value);
			displayTransNames();
			// console.log(transObject);
			// show components entry
			const componentsWrapper = document.getElementById('module-entry');
			componentsWrapper.classList.add('show-components');
		}
	});
}

function displayTransNames() {
	let entryObject = transObject;
	const displayTransName = document.getElementById('entry-name');
	const displayTransAmount = document.getElementById('entry-amount');
	displayTransName.innerHTML = entryObject[0];
	displayTransAmount.innerHTML = entryObject[1];
	console.log(entryObject);
}

const entryField = document.getElementById('entry-fields');
const entryInputs = entryField.querySelectorAll('input');
const entryAdd = document.getElementById('entry-add');

function addInputField() {
	let newInput = document.createElement('input');
	entryField.appendChild(newInput);
	console.log(newInput);
}

function addName() {
	entryAdd.addEventListener('click', function() {
		// console.log(entryInputs.value);
		// let inputList = entryInputs;
		for (let i = 0; i < entryInputs.length; i++) {
			if (entryInputs[i].value === '') {
				console.log('empty fields, please fill empty names');
				alert('Empty field not allowed!');
			} else {
				console.log('proceed!');
				// add name
				addInputField();
			}
		}
	});
}

$(document).ready(function() {
	getTrans();
	addName();
});
