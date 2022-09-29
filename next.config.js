const dotenv = require("dotenv").config();

module.exports = {
  publicRuntimeConfig: Object.keys(dotenv.parsed).reduce((acc, key) => {
    if (key.startsWith('NEXT_PUBLIC')) {
      acc[key] = dotenv.parsed[key];
    }
    return acc;
  }, {}),
  serverRuntimeConfig: Object.keys(dotenv.parsed).reduce((acc, key) => {
    if (!key.startsWith('NEXT_PUBLIC')) {
      acc[key] = dotenv.parsed[key];
    }
    return acc;
  }, {}),
};
