import express, { Express, Request, Response } from "express";
const dotenv = require("dotenv");

dotenv.config();

const app: Express = express();
app.use(express.json())
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "./config/config.env" });
}
app.post('/user/login', (req, res)=>{
    const details = req.body;
    console.log(details);
    
    if(!details.userName || !details.password)
    {
        res.status(400).send("please send all information")
    }

    res.status(201).send("login success")
    
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});