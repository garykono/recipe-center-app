const crypto = require('crypto')

/**
 * Method to get a salted hash.
 * We put this in its own method to keep consistency
 * @param {string} pw the password to hash
 * @param {string} salt the salt to use when hashing
 */
 function getHash(pw, salt) {
    return crypto.createHash("sha256").update(pw + salt).digest("hex");
}

module.exports = { 
    getHash
}