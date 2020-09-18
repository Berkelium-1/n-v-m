module.exports = app => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/n-v-m', {
        useNewUrlParser: true // 使用新的Url分析器
    });
}