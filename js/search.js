String.prototype.replaceChars = function (character, replacement) {
	var str = this;
	var a;
	var b;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === character) {
			a = str.substr(0, i) + replacement;
			b = str.substr(i + 1);
			str = a + b;
		}
	}
	return str;
}

function search(query) {
	switch (query.substr(0, 2)) {
		case '!g':
			query = query.substr(3);
			window.location.href = ('https://google.com/search?q=' +
				query.replaceChars(' ', '%20'));
			break;
		default:
			window.location.href = ('https://www.duckduckgo.com/' +
				query.replaceChars(' ', '%20'));
	}
}

searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', function (e) {
	if (e.keyCode === 13) {
		if (searchInput.value === '') {
			searchInput.placeholder = 'Type something...';
		} else {
			search(this.value);
			searchInput.value = '';
			searchInput.placeholder = 'Sup';
		}
	}
});