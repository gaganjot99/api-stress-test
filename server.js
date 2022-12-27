const express = require('express');
const {fib, loops} = require('./src/fib');

const app = express();

app.get('/', (req, res)=>{
    res.json({"data": "Something"});
})

app.get('/lop', (req, res)=>{
    res.json({"data": loops()});
})

app.get("/fib/:num", (req, res)=>{
    const num = fib(+req.params.num);

    res.json({"data": num});
})

const port = process.env.PORT||3000
app.listen(port, ()=>{console.log("Server is running http://localhost:"+port)});