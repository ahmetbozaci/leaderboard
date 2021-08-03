import './scss/style.scss';

const scores = [
  { name: 'name1', score: 100 },
  { name: 'name2', score: 200 },
  { name: 'name3', score: 300 },
];
const leaderBoard = document.getElementsByClassName('leader-board');

const displayBoard = () => {
  scores.forEach((score) => {
    const li = document.createElement('li')
    leaderBoard[0].appendChild(li);
    li.append(`${score.name} ---- ${score.score}`)
  });
};
displayBoard();