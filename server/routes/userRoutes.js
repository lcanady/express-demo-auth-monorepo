const router = require("express").Router();
const db = require("../models/index");
const bcrypt = require("bcrypt");
router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = await db.Users.create({
      name: req.body.name,
      emai: req.body.email.toLowerCase(),
      password: hash,
    });

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
