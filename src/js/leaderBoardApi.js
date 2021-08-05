const APIURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gamesID = 'nodsadı'; // YUELB6qMFZSbsC3Ub4pp // Super Mario
const scoreUrl = `${APIURL}/games/${gamesID}/scores`;

const addDataApi = (user, score) => {
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

const getApiData = async () => {
  const response = await fetch(scoreUrl);
  const data = await response.json();
  return data.result;
};

export { addDataApi, getApiData };