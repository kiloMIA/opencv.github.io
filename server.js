const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const ejs=require('ejs')
const methodOverride = require('method-override')




app.set('view engine','ejs')
app.use(express.static(__dirname+"/public"))
app.set("public", path.join(__dirname, "public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

const UserRoute = require('./routes/UserRoute')
app.use('/user',UserRoute)

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const {router} = require("express/lib/application");

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.use("/", require("./routes/root"));
app.use("/open", require("./routes/open"));
app.use("/builder", require("./routes/builder"));
app.use("/personal", require("./routes/personal"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
