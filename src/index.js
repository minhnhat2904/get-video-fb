const express = require('express');
const app = express();
const router = require('./router');
const {join} = require('path');
const {PORT} = require('./env');
const ROOT_DIR = process.cwd();

const PUBLIC_PATH = join(ROOT_DIR, 'public');
const VIEW_PATH = join(ROOT_DIR,'views');

app.set('view engine', 'pug');
app.set('views',VIEW_PATH);
app.use(express.static(PUBLIC_PATH));
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true
    })
);
app.use('/',router);

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`)
})
