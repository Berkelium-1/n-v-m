const express = require('express');

const app = express();

let routes = require('./routes/admin/index');
let db = require('./plugins/db');

db(app);
routes(app);

app.use(require('cors')());
app.use(express.json());

const prot = 3000;

app.listen(prot, () => {
    console.log(`http://localhost:${prot}`);
});