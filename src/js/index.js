import '../scss/style.scss';
import displayBoard from './displayBoard.js';

const scores = [
  { name: 'name1', score: 100 },
  { name: 'name2', score: 200 },
  { name: 'name3', score: 300 },
];

displayBoard(scores);