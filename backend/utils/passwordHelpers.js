const crypto = require('crypto');

function encryptPassword(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 1, 128, 'sha512').toString('hex');
}

function isValidPassword(user, password) {
    return encryptPassword(password, user.salt) === user.password;
}

function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

module.exports = {
    encryptPassword,
    isValidPassword,
    generateSalt,
};
