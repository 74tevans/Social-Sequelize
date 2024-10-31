const {db, DataTypes} = require('./db/connection.js');

const Post = db.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: {
        type: DataTypes.STRING,
        validate: {
            isDate: true
        }
    }
});

module.exports = Post;