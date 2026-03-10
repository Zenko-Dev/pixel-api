require("dotenv").config();

const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/health", (req,res)=>{
    res.json({
        status:"ok",
        service:"pixel-api"
    });
});

app.get("/secret",(req,res)=>{
    res.json({
        api_key:process.env.API_KEY
    });
});

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});