const generateToken = require('./generateToken');
const fetchLastGames = require('./fetchLastGames');

const fetchGamesWithToken = async () => {
  const token = await generateToken();
  if (token) {
    const games = await fetchLastGames(token);
    console.log('Últimos Jogos:', games);
  } else {
    console.error('Não foi possível gerar o token.');
  }
};

fetchGamesWithToken();
