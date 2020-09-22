module.exports = app => {
    const express = require('express');

    const router = express.Router();

    const Category = require('../../models/Category.js');

    router.post('/categories', async (req, res) => { // 保存新建分类数据
        const model = await Category.create(req.body);
        res.send({
            msg: '保存成功',
            model
        });
    });

    router.get('/categories', async (req, res) => { // 获取列表数据
        const listData = await Category.find().limit(10);
        res.send(listData);
    });

    router.get('/categories/:id', async (req, res) => { // 获取编辑分类详情
        const model = await Category.findById(req.params.id);
        res.send(model);
    });

    router.put('/categories/:id', async (req, res) => { // 修改分类数据
        const model = await Category.findByIdAndUpdate(req.params.id, req.body); // 通过id查找后更新
        res.send({
            msg: '修改成功',
            model
        });
    });
    router.delete('/categories', async (req, res) => { // 删除分类数据
        const model = await Category.findOneAndRemove(req.body.row);
        res.send({
            msg: '删除成功',
            model
        });
    });

    app.use('/admin/api', router); // 挂载路由
}