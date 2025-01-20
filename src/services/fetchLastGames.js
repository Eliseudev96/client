const axios = require('axios');

const fetchLastGames = async (token) => {
  const API_URL = 'https://cadgea.com.br/_custom/API/v1/jogos';
  const API_SECRET = '63a8e7d4b1af8a6c4e87a8b4d95a64d4cfc2a8e0bbaa1234d89c64e85c59a5db'; 
  const API_PUBLIC = 'ZjalTBK3PRLaUyIJP26KQxYEngDkJyEYmhnN5CYHkkeOS7BeJYbxUEalspAEx1ecBkwAK4oPuGiF7JRQFM97seT92RJ0o5lGGX83rBNHbHDid2cMmAmTOOyeSXGCKidh';

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        'x-api-secret': API_SECRET,
        'x-api-public': API_PUBLIC,
      },
    });

    console.log('Jogos Obtidos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os jogos:', error.response?.data || error.message);
  }
};

module.exports = fetchLastGames;
