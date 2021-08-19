const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

require('./db/conn');
const{json} = require('express');
const Register = require("./models/registers");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../tempelates/views");
app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", templates_path);

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/login",(req,res)=>{
    res.render("login");
})
app.post("/register",async(req,res)=>{
    try{
        const password = req.body.password;
        console.log(password);
        const c_password = req.body.confirm;
        const uname = req.body.username;
        if(password===c_password)
        {
            const registerUser = new Register({
                username : uname,
                password : password,
                confirm : c_password
            });

            const reader = await registerUser.save();
            res.status(201).render("index");
        }
        else
        res.send("Passwords are not matching");

    }catch(e){
        res.status(400).send(e);

    }
});

app.post("/login",async(req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
        const user_name = await Register.findOne({username:username });
        //const isMatch = bcryptjs.compare(password, user_email.password);
        if (user_name.password===password) {
            res.status(201).render("index");
        }
        else {
            res.send("Invalid Login Details!");
        }

    }
catch(e){
        res.send(400).send(e);
    }
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
