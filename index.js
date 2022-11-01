const express = require('express');
const app = express();
const { json, urlencoded } = require('body-parser');

app.set('views', './templates');
app.set('view engine', 'pug');

app.use(json())
app.use(urlencoded({ extended: false }))
app.use(express.static('./public'));

require('./routers/handler.js')(app);

const port = 3000;
app.listen(port, () => {
    console.log(`Chess is running on port ${port}`);
})