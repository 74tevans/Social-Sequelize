const {db, DataTypes} = require('./db/connection.js');

const Like = db.define('Like', {
    reactionType: DataTypes.STRING,
    createdAt: {
        type: DataTypes.STRING,
        validate: {
            isDate: true
        }
    }
});

module.exports = Like;