const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here
Profile.belongsTo(User);
User.hasOne(Profile);

Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(Post);
Post.hasMany(Comment);

User.belongsToMany(Like, {through: 'UserLike'});
Like.belongsToMany(User, {through: 'UserLike'});

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}