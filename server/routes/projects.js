const express = require('express');
const router = express.Router();
const { Project, Task } = require('../models');
const { auth, checkRole } = require('../middleware/auth');

router.post('/', auth, checkRole('Admin'), async (req, res) => {
    try {
        const project = await Project.create({ ...req.body, UserId: req.user.id });
        res.status(201).send(project);
    } catch (e) { res.status(400).send(e); }
});

router.get('/', auth, async (req, res) => {
    const projects = await Project.findAll();
    res.send(projects);
});

module.exports = router;
