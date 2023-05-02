var list = document.querySelectorAll('ul.arclist > li');

var data = [...list].map((li) => {
	var src = li.querySelector('a > img').src.split('/')[4];
	src = src.substr(0, src.indexOf('_1920x1080'));

	return {
		urlbase: '/th?id=OHR.' + src,
		startdate: li.querySelector('article > h3 > time').innerText.split('-').join(''),
		title: li.querySelector('article > h3 > span').innerText,
		desc: li.querySelector('article > p').innerText
	};
});
