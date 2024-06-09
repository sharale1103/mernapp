const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser", async (req, res) => {
    try {
        await User.create({
            name: "Shyam das",
            password: "12356",
            email: "abc@gmail.com",
            location: "dehu"
        })
        res.json({ success: true });
    }
    catch (error) {
        console.log(error)
        res.json({ success: false });

    }

})

module.exports = router;