const leaderBoard = document.getElementsByClassName('leader-board');

const displayBoard = (scores) => {
  scores.forEach((score) => {
    const li = document.createElement('li');
    leaderBoard[0].appendChild(li);
    li.append(`${score.name} ---- ${score.score}`);
  });
};

export default displayBoard;