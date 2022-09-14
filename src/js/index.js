/** @format */
import '../scss/style.scss';
import { getApiData, addDataApi } from './leaderBoardApi.js';

const addScore = (name, score) => {
  name = document.getElementById('name').value;
  score = document.getElementById('score').value;
  addDataApi(name, score);
};

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', addScore);

const leaderBoard = document.getElementsByClassName('leader-board');

const displayBoard = (scoreArray) => {
  leaderBoard[0].innerHTML = '';
  scoreArray.forEach((item) => {
    const li = document.createElement('li');
    leaderBoard[0].appendChild(li);
    li.append(`${item.user} ---- ${item.score}`);
  });
};

const test = () => {
  getApiData().then((response) => displayBoard(response));
};

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', test);