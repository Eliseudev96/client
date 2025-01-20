const generateToken = require('./generateToken.js');

(async () => {
  const token = await generateToken();
  console.log('Token Gerado:', token);
})();
