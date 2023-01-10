const jwt = require('jsonwebtoken');
let secret = 'anjaymabar'
// let secret = process.env.JWT_SECRET

function jwtToken(payLoad){
    return jwt.sign(payLoad,secret)
}

function decoded(token){
    return jwt.verify(token, secret);
} 

module.exports = {jwtToken, decoded}