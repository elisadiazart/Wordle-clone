// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import {
  createRows,
  printWord,
  compareWords,
  paintLetter
} from './gameboard.js';
import { numberTries, ALL_WORDS } from './constans.js';

createRows();

const form = document.getElementById('solution-form');
let currentTry = 0;

form.addEventListener('submit', e => {
  e.preventDefault();
  compareWords(e.target.word.value, currentTry);
  printWord(e.target.word.value, currentTry);
  e.target.word.value = '';
  currentTry++;
});
