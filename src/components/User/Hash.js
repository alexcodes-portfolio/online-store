const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

export function hashPassword(password) {
    return bcrypt.hashSync(password, salt);
}

export function checkPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}