const express = require('express');
const router = express.Router();
const { Task, User } = require('../models');
const { auth } = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
    const tasks = await Task.findAll({ include: [{ model: User, as: 'Assignee', attributes: ['name'] }] });
    res.send(tasks);
});

router.patch('/:id', auth, async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).send();
        await task.update(req.body);
        res.send(task);
    } catch (e) { res.status(400).send(e); }
});

module.exports = router;
