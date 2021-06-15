const fooditems = require('./fooditems.json');
const users = require('./users.json')

module.exports = () => ({
    fooditems: fooditems,
    users: users
});