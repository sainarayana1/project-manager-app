const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = await User.create({ name, email, password: hashedPassword, role });
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
        res.status(201).send({ user, token });
    } catch (e) { res.status(400).send(e); }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(400).send({ error: 'Invalid login credentials' });
        }
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
        res.send({ user, token });
    } catch (e) { res.status(500).send(e); }
});

module.exports = router;
