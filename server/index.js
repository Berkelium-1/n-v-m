const express = require('express');

const app = express();

let routes = require('./routes/admin/index.js');
let db = require('./plugins/db.js');

db(app);
routes(app);

app.use(require('cors')());
app.use(express.json());

const prot = 3000;

app.listen(prot, () => {
    console.log(`http://localhost:${prot}`);
});