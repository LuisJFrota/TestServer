const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.json("Api running")
})

app.listen(3333 , () => 
{
    console.log("api running");
});