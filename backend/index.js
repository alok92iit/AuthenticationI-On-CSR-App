if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express =require("express")
const app =express()
const cors =require("cors")
const mongoose =require("mongoose")
const passport =require("passport")
const localStretegy =require("passport-local")
const session =require("express-session")
const MongoStore  =require("connect-mongo");
const User = require("./model/User")
//Route Imports
const router =require("./routes/auth")
app.use(  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  }))
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/cliffexUser')
.then((result) => {
    console.log("connected to DataBase")    
}).catch((err) => {
    console.log(err)
});;
const store =MongoStore.create({
    secret:"cliffexAdminPortal",
    mongoUrl:'mongodb://localhost:27017/cliffexUser',
    touchAfter:24*60*60,
});
const sessionConfig ={
    store,
    name:"cliffexSession",
    secret:"cliffexAdminPortal",
    resave :false,
    saveUninitialized: true,
    withCredentials:true,
    cookie:{
        httpOnly:true,
        expire :Date.now() +1000*60*60*24*7*1,
        maxAge :1000*60*60*24*7
    }
}
app.use(session(sessionConfig))

//Inialize passport middlware
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStretegy(User.authenticate()))
//session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//tellin passport to check username and password is corrrect or not using authentication method of passport-local-mongoose

app.use((req,res,next)=>{
    //this is the type of global varible we can use i any temlate 
    res.locals.currentUsers =req.user;
    // res.locals.mymsg = req.flash('mymsg');
    // res.locals.error   =req.flash("error");
    next();
})
app.use("/",router)
// app.post("/createUser",async (req,res)=>{
//     const {name,email,gender,password}=req.body;
//     console.log({name,email,gender,password})
//     res.status(200).json({response:"user created"})
// })

app.listen(8000,()=>{
    console.log("server runing at port 8000")
})