const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('\save',(request,response)=>{
    response.send('login Page');
});

router.get('\:id',(request,response)=>{
    response.send('logout Page');
});

router.get('\:id',(request,response)=>{
    response.send('logout Page');
});

router.put('\:id',(request,response)=>{
    response.send('logout Page');
});

router.delete('\:id',(request,response)=>{
    response.send('logout Page');
});

module.exports = router;