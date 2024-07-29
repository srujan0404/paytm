const router = require("express").Router();

const User = require("../Models/userModel");

router.post("/register", async (req, res) => {
    try {
        const user = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        });
        await user.save();
        res.send("User Registered Successfully");
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
        });
        if (user) {
        res.send("Login Successful");
        } else {
        res.send("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});
