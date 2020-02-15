const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('\login',(request,response)=>{
    response.send('login Page');
});

router.get('\logout',(request,response)=>{
    response.send('logout Page');
});

module.exports =  router;