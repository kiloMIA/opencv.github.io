const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();


app.get('/builder',(req, res, next) => {
    res.render(__dirname+'views/builder')
})

app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

router
    .route("/")
    .get((req, res) => res.render(path.resolve('views/builder.ejs')))
    .post((req, res) => res.send("POST"));
module.exports = router;