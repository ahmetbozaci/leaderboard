// import '../scss/style.scss';
import displayBoard from './displayBoard.js';

const scores = [
  { name: 'name1', score: 100 },
  { name: 'name2', score: 200 },
  { name: 'name3', score: 300 },
];

displayBoard(scores);

// ! Add data to api make it module
const APIURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gamesID = 'nodsadı'; // YUELB6qMFZSbsC3Ub4pp // Super Mario
const scoreUrl = `${APIURL}/games/${gamesID}/scores`;

const addDataApı = (user, score) =>{
  fetch(scoreUrl, {
    method: 'POST',
    body: JSON.stringify({
      user, score,
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
fetch(scoreUrl)
  .then((response) => response.json())
  .then((json) => console.log(json.result));
