const axios = require('axios');

const generateToken = async () => {
  const API_URL = 'https://cadgea.com.br/_custom/API/v1/auth';
  const API_KEY = 'CnHSOyfrROIIQZsTzCIbmWBL8KAfl6tgFa0cO0ozO9YWTROBL0dAideAIJWLytdoC4p8LZgUUyQ4B6po4C3g7FCZc5t8xS830ImgmSN6TAeJ4EGgMuD5TASDcIMS04a';
  const API_SECRET = '63a8e7d4b1af8a6c4e87a8b4d95a64d4cfc2a8e0bbaa1234d89c64e85c59a5db'; 
  const API_PUBLIC = 'ZjalTBK3PRLaUyIJP26KQxYEngDkJyEYmhnN5CYHkkeOS7BeJYbxUEalspAEx1ecBkwAK4oPuGiF7JRQFM97seT92RJ0o5lGGX83rBNHbHDid2cMmAmTOOyeSXGCKidh'; 

  const usuario = 'ceicom'; 
  const senha = '6253425d54d1236'; 

  try {
    const response = await axios.post(
      API_URL,
      { usuario, senha },
      {
        headers: {
          'x-api-key': API_KEY,
          'x-api-secret': API_SECRET,
          'x-api-public': API_PUBLIC,
        },
      }
    );

    console.log('Resposta Completa:', response.data);

    const accessToken = response.data.data.access_token; 
    
    if (accessToken) {
      console.log('Token Gerado:', accessToken);
      return accessToken;
    } else {
      console.error('Token não encontrado na resposta');
    }
  } catch (error) {
    console.error('Erro ao gerar o token:', error.response?.data || error.message);
  }
};

module.exports = generateToken;
