const express = require('express');
const parser = require('body-parser');
const Routes = require('./routes/cabRoutes');
const accountRoutes = require('./routes/accountsRoutes');
const homeRoutes = require('./routes/homeRoutes');
const bookRoutes = require('./routes/bookRoutes');
const adminRoutes = require('./routes/adminRoutes');
const path = require('path');
const cookieSession = require('cookie-session');
const {engine} = require('express-handlebars');
const authMiddleware = require('./middlewares/authenticationMiddleware');

// Creating an express app.
const app = express();

// Configuring the express app to use handlebars template engine.
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'))

// Configuring body parser.
app.use("/", parser.urlencoded({extended: true}));

// Configuring static files middleware.
app.use("/static", express.static(path.join(__dirname, 'static')));

app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(authMiddleware);
app.use(homeRoutes);
app.use(Routes);
app.use(accountRoutes);
app.use(bookRoutes);
app.use(adminRoutes);
function handler(req, res){
    res.send("Hello World")
}
app.get('/test', handler)
app.listen(80);
