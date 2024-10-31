const {db, DataTypes} = require('./db/connection.js');

const Comment = db.define('Comment', {
    body: DataTypes.STRING,
    createdAt: {
        type: DataTypes.STRING,
        validate: {
            isDate: true
        }
    }
});

module.exports = Comment;