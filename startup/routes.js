const home = require('../routes/home')

module.exports = (app, express) => { 
    console.log(__dirname)
    app.use(('/'), express.static('public'));
    app.use('/', home)
}
