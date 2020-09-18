const express = require('express');
const cors = require('cors');
const app = express();

let routes = require('./routes/admin/index.js');
let db = require('./plugins/db.js');


app.use(cors()); // 允许跨域
app.use(express.json());

db(app);
routes(app);


const prot = 3000;

app.listen(prot, () => {
    console.log(`http://localhost:${prot}`);
});


// app.all('*', function(req, res, next) { //深刻了解这次错误，以后不会再犯，跨域请求允许
//     res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
//     //这里最好不用*通配符，之前就这报错，写上指定域名例如 http://127.0.0.1:8080
//     res.header("Access-Control-Allow-Headers", "content-type");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("Access-control-Allow-Credentials", "true");
//     //这个地方是最坑了，百度查了好多大佬给的方案都没加这条，报错一直报这个，加上就ok
//     next();
// });