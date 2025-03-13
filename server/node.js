const express = require('express');
const app = express();

app.get("/hello", (req, res)=>{
    res.json({message: "lllll"});
});

app.listen(3000,()=>{
    console.log("El servidor está corriendo en el puerto 3000");
});