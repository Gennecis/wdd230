const hamButton = document.querySelector('#nav-btn');
const navigation = document.querySelector('.menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});