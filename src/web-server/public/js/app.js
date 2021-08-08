console.log('Client side javascript file is loaded');

const weatherForm = document.querySelector('form');
const searchEl = document.querySelector('input');
const loaderEL = document.querySelector('#loader');
const resultEL = document.querySelector('#result');
const errorEL = document.querySelector('#error');

searchEl.value = '';
loaderEL.style.display = 'none';

weatherForm.addEventListener('submit', event => {
	event.preventDefault();
	loaderEL.style.display = 'block';
	const address = searchEl.value;
	console.log(address);
	try {
		fetch(`/weather?address=${address}`).then(response => {
			response.json().then(data => {
				if (data.error) {
					resultEL.textContent = '';
					errorEL.textContent = data.error;
				} else {
					resultEL.textContent = data.forecast;
					errorEL.textContent = '';
				}

				loaderEL.style.display = 'none';
			});
		});
	} catch {}
});
