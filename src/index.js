import generateJoke from './generate.Joke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const bgcImg = document.querySelector('#bgc');

bgcImg.src = laughing;
const jokeBtn = document.querySelector('#jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
