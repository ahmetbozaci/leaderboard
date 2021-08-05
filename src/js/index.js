/** @format */

// import '../scss/style.scss';
// import displayBoard from './displayBoard.js';

// ! Add data to api make it module
const APIURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gamesID = 'nodsadı'; // YUELB6qMFZSbsC3Ub4pp // Super Mario
const scoreUrl = `${APIURL}/games/${gamesID}/scores`;

const addDataApı = (user, score) => {
  fetch(scoreUrl, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const addScore = (name, score) => {
  name = document.getElementById('name').value;
  score = document.getElementById('score').value;
  addDataApı(name, score);
};

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', addScore);

// ! GET DATA FROM API

const getApiData = async () => {
  const response = await fetch(scoreUrl);
  const data = await response.json();
  return data.result;
};

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