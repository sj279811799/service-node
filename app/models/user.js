const db = require('../../middleware/db');

module.exports = db.defineModel('users', {
    email: {
        type: db.STRING(100),
        unique: true
    },
    password: db.STRING(100),
    username: db.STRING(100)
});