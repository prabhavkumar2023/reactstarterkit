// add apiUrl based on NODE_ENV value
// const apiUrl = process.env.NODE_ENV === 'production' ? 'https://api.example.com' : 'http://localhost:3000';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./config.prod');
} else {
    module.exports = require('./config.dev');
}
