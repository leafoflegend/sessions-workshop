const User = require('./models/User.js');
const db = require('./db.js');

const syncAndSeed = () => db
  .sync({ force: true })
  .then(() => {
    // TODO: Seed...
    return true;
  })
  .catch(e => {
    console.error(e);
  });

module.exports = {
  models: {
    User,
  },
  db,
  syncAndSeed,
};
