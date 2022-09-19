const router =require("express").Router();
const User   =require("../model/User");
const passport =require("passport")
router.post("/register",async (req,res)=>{
    const {name,email,gender,password} =req.body;
    const user =new User({username:name,email,gender});
    const newUser =await User.register(user,password)
    // console.log(newUser)
    // if(req.user._id){
    console.log(req.user)
    res.status(200).json({message :"USer registed sucessfully",user:req.session.user})
    // }
})
router.get("/error",(req,res)=>{
    res.status(400).json({message:"Invalid Credantials"})
})
router.post('/login',passport.authenticate('local',
 { failureRedirect: '/error' }),async (req,res)=>{
    // if(req.user){
    res.status(200).json({message:"welcome Back"})
    // }
 });
 router.get('/isLoggedIn',async (req,res)=>{
    if(req.xhr && !req.isAuthenticated()){
        return res.status(401).json({msg:'You need to login First'})

    }
// req.session.returnUrl =req.originalUrl //it will return current url of page 

    if(!req.isAuthenticated()){
        // req.flash('error',"Yon Need To Login First")
        return res.status(401).json({msg:'You need to login First'})

    }
 })

 module.exports =router