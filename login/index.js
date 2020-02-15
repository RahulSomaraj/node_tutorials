const express = require('express');
const app = express();
const user_routes = require('./routes/user_routes');
const login_routes = require('./routes/login_routes');

app.use(express.json());

app.use('/user',user_routes);
app.use('/login',login_routes);

app.listen(3000,()=>{
    console.log("Server Started")
})