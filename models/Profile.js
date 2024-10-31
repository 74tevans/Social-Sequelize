const {db, DataTypes} = require('./db/connection.js');

const Profile = db.define('Profile', {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: {
        type: DataTypes.STRING,
        validate: {
            isDate: true
        }
    }
});

module.exports = Profile;