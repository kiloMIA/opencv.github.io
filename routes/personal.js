const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const https = require('https');
app.use(express.static(__dirname+'/public'))


app.get('/personal',(req, res, next) => {
        res.render(__dirname+'views/personal')
})
router
    .route("/")
    .get((req, res) => res.render(path.resolve('views/personal.ejs')))
    .post((req, res) => res.send("POST"));
module.exports = router;
/*
app.post("/personal",(req, res) =>{
        let text="wutang clan aint nothin' to f@$% with"
        let size="100*10"
        let url = "http://api.qrserver.com/v1/create-qr-code/?data="+ text +"&size="+size
        https.get(url,function (response){
                response.on('data', data=>{

                })
        })
})*/