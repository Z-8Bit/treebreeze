// Theme switcher
let switcher = document.getElementById('switch_theme');

localStorage.getItem('theme') === 'dark' ? darkTheme() : lightTheme();

switcher.onclick = () => switcher.checked ? darkTheme() : lightTheme();

function darkTheme() {
	switcher.checked = true;
	localStorage.setItem('theme', 'dark');
	document.body.setAttribute('theme', 'dark');
}

function lightTheme() {
	switcher.checked = false;
	localStorage.setItem('theme', 'light');
	document.body.removeAttribute('theme');
}

// Automatic theme change depending on the time of day
 let hour = new Date().getHours();
hour >= 19 || hour < 6 ? darkTheme() : lightTheme(); 

// Todo Switch
let chbTodo = document.getElementById('switch_todo');
let todoCard = document.querySelector('.todo-card');
let todoCardColor = 'todo-card-color';

// To-do list card
chbTodo.onclick = function () {
	if (chbTodo.checked) {
		localStorage.setItem('todoCard', 'shown');
		addClasses(todoCard, todoCardColor);
	} else {
		localStorage.setItem('todoCard', 'hidden');
		removeClasses(todoCard, todoCardColor);
	}
}

if (localStorage.getItem('todoCard') == 'shown') {
	chbTodo.setAttribute('checked', 'checked');
	addClasses(todoCard, todoCardColor);
}

function addClasses(cardName, cardColor) {
	let card = document.querySelector('.card');
	let content = document.querySelector('.content');
	cardName.style.cssText = `
		opacity: 1;
		z-index: 1;
	`;
	card.classList.add(cardColor);
	content.classList.add('hide');
}

function removeClasses(cardName, cardColor) {
	let card = document.querySelector('.card');
	let content = document.querySelector('.content');
	cardName.style.cssText = `
		opacity: 0;
		z-index: -1;
	`;
	card.classList.remove(cardColor);
	content.classList.remove('hide');
}