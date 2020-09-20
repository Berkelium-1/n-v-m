module.exports = app => {
    const express = require('express');

    const router = express.Router();

    const Category = require('../../models/Category')

    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body);
        console.log(req.body);
        res.send({
            msg: '保存成功',
            model
        });
    });

    router.get('/categories', async (req, res) => {
        const listData = await Category.find();
        res.send(listData);
    });

    app.use('/admin/api', router); // 挂载路由
}