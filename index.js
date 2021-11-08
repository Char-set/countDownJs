if(process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/count-down.min.js')
} else {
    module.exports = require('./dist/count-down.js')
}