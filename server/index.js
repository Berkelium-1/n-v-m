const express = require('express');
const app = express();

const routes = require('./routes/admin/index');
const db = require('./plugins/db');


// app.all('*', function(req, res, next) { //深刻了解这次错误，以后不会再犯，跨域请求允许
//     res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
//     //这里最好不用*通配符，之前就这报错，写上指定域名例如 http://127.0.0.1:8080
//     res.header("Access-Control-Allow-Headers", "content-type");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("Access-control-Allow-Credentials", "true");
//     //这个地方是最坑了，百度查了好多大佬给的方案都没加这条，报错一直报这个，加上就ok
//     next();
// });

app.use(require('cors')()); // 开启跨域
app.use(express.json()); //这是Express中内置的中间件功能。它使用JSON有效负载分析传入请求，并基于body-parser。

db(app);
routes(app);

const prot = 3000; // 端口号

app.listen(prot, () => {
    console.log(`http://localhost:${prot}`);
});