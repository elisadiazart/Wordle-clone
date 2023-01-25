const gameBoard = document.getElementById('words-container');
import { numberTries, ALL_WORDS, numberLetters } from './constans.js';

const createRows = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 1; index <= numberTries; index++) {
    const newRow = document.createElement('div');
    newRow.classList.add('game-row');
    fragment.append(newRow);
    for (let index = 1; index <= numberLetters; index++) {
      const newLetter = document.createElement('div');
      newLetter.classList.add('letter');
      newRow.append(newLetter);
    }
  }
  gameBoard.append(fragment);
};

const printWord = (word, trynumber) => {
  for (let index = 0; index <= word.length - 1; index++) {
    gameBoard.children[trynumber].children[index].textContent = word[index];
  }
};

const choseRandomWord = () => {
  return Math.floor(Math.random() * ALL_WORDS.length);
};

const choosenWord = ALL_WORDS[choseRandomWord()];
console.log(choosenWord);

const paintLetter = (position, classname, trycurrent) => {
  const currentLetter = gameBoard.children[trycurrent].children[position];
  if (currentLetter.classList.contains('letter-correct')) return;
  currentLetter.classList.add(classname);
};

const compareWords = (word, trycurrent) => {
  let word2 = '';
  let classname = '';
  for (let index = 0; index < numberLetters; index++) {
    if (word[index] === choosenWord[index]) {
      classname = 'letter-correct';
      word2 += '-';
      paintLetter(index, classname, trycurrent);
    } else {
      word2 += choosenWord[index];
    }
  }
  console.log(word2);
  for (let index = 0; index < word2.length; index++) {
    const letter = word[index];
    if (word2.includes(letter)) {
      classname = 'letter-contains';
      paintLetter(index, classname, trycurrent);
    } else {
      classname = 'letter-incorrect';
      paintLetter(index, classname, trycurrent);
    }
  }

  console.log(word2);

  const newPopUp = document.createElement('div');
  newPopUp.classList.add('pop-up');
  gameBoard.append(newPopUp);
  if (word.length !== 5) {
  }
};

export { createRows, printWord, choseRandomWord, compareWords, paintLetter };
