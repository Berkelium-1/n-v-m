const express = require('express');
const app = express();

const routes = require('./routes/admin/index');
const db = require('./plugins/db');

app.use(require('cors')()); // 开启跨域
app.use(express.json()); //这是Express中内置的中间件功能。它使用JSON有效负载分析传入请求，并基于body-parser。

db(app);
routes(app);

const prot = 3000; // 端口号

app.listen(prot, () => {
    console.log(`http://localhost:${prot}`);
});