const routerHandler = (app) => {
    app.use('/', require('./homepage.js'));
}

module.exports = routerHandler;