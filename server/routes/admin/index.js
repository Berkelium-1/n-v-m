module.exports = app => {
    const express = require('express');

    const router = express.Router();

    const Category = require('../../models/Category.js');

    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body);
        res.send(model);
    });

    router.get('/categories', async (req, res) => {
        const listData = await Category.find().limit(10); // 获取10条
        res.send(listData);
    });


    app.use('/admin/api', router);
}