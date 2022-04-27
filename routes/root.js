const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')

app.get('/',(req, res) => {
    res.sendFile('views/index')
})
router
    .route("/")
    .get((req, res) => res.render(path.resolve('views/index.ejs')))
    .post((req, res) => res.send("POST"));
module.exports = router;
