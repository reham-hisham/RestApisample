const express =require('express')
require("./models/connection");
const cors = require("cors");

const app = express()
app.use(express.json());
app.use(cors());
const admin = require('./routes/admin.route') 
const user = require('./routes/user.route') 


app.use('/api/user', user)
app.use('/api/admin', admin)
app.listen(8000)

console.log("we on http://localhost:8000")
module.exports = app 