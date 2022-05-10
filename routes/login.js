const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs")
const path = require('path');
router
    .route("/")
    .get((req, res) => res.render(path.resolve("views/login.ejs")))
    .post(async (req, res) => {
        const {email, password} = req.body
        const user = await User.findOne({email: email}).lean()

        if (!user) {
            return res.json({status:'error', error:"Invalid email/password"})
        }

        if (await bcrypt.compare(password, user.password)) {
            const token = {
                id: user._id,
                email: user.email,
                name: user.name,
                surname: user.surname
            }

            return res.render(path.resolve('routes/personal.ejs'), {users: token})
        }

        res.json({status:'error', error:"Invalid email/password"})
    })
module.exports = router;