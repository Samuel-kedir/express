const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');



//express app
const app = express();

//connect to mongodb
const dburi  = "mongodb+srv://sam:1234@cluster0.psmrc.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dburi,{useNewUrlParser:true,useUnifiedTopology: true})
    .then((result)=>app.listen(3000,()=>{
        console.log('listening on port 3000');
    }),console.log("connected to db")
    )
    .catch((err)=>console.log(err));

//connect to mongoDb ends

app.set('view engine','ejs')


app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/add-blog',(res,req)=>{

})


app.get('/',(req,res)=>{
    const blogs = [
        {title: "something is up", snippet: 'i guess we will see it soon'},
        {title: "Do you seee a hope", snippet: 'A hope for what , a hope for your heart or a hope for your mind'},
        {title: "Everthing is changed", snippet: 'May be nothing is changed , may be you just saw everything the way it is.'},

    ];
    res.render('index',{title: 'home',blogs});
});

app.get('/about',(req,res)=>{
    res.render('about',{title: 'about'})
})

app.get('/create',(req,res)=>{
    res.render('create',{title: 'craete blog'});
})

app.use((req,res)=>{
    res.status(404).render('404',{title: '404'});
})
