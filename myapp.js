const express = require('express');
const mongoose = require('mongoose');

//express app
const app = express();





//connect to mongo db
const dburi  = "mongodb+srv://sam:1234@cluster0.psmrc.mongodb.net/node-tuts?retryWrites=true&w=majority"; //change cluster name
mongoose.connect(dburi,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>app.listen(3000,()=>{ 
        console.log("listening on port 3001");
    }),console.log("connected to db"))
    .catch((err)=>console.log("COULD NOT CONNECT TO DATABASE"+err))






//listen to a port
app.listen(3001,()=>{
    console.log("listening on port 3001");
});






//initiate ejs view engine
app.set('view engine','ejs');







//get a page
app.get('/',(req,res)=>{
    res.render('about',{title: "about"}); //the title is passed to the view
})

