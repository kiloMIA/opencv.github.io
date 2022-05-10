const express = require("express");
// const bcrypt = require("bcryptjs");
// const User = require("../models/User");
const router = express.Router();
const path = require('path');
const createUser = require('../controllers/UserController')
router
    .route("/")
    .get((req, res) => res.render(path.resolve("views/registration.ejs")))
    .post(createUser.create)
module.exports = router;