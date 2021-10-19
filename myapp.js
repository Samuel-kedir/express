// const express = require('express');
// const mongoose = require('mongoose');
// const Blog = require('./models/blog');

// //express app
// const app = express();





// //connect to mongo db
// const dburi = "mongodb+srv://sam:1234@cluster0.psmrc.mongodb.net/node-tuts?retryWrites=true&w=majority";
// mongoose.connect(dburi, {useNewUrlParser:true,useUnifiedTopology:true})
//     .then((result)=> app.listen(3000,()=>{
//         console.log("listening on port 3000");
//     }))
//     .catch((err)=>console.log(err));





// //listen to a port
// // app.listen(3001,()=>{
// //     console.log("listening on port 3001");
// // });






// //initiate ejs view engine
// app.set('view engine','ejs');







// //get a page
// app.get('/',(req,res)=>{
//     res.render('about',{title: "about"}); //the title is passed to the view
// })
// // insert data to db
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });
//     blog.save() // to save to db
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch ((err)=>{
//             console.log(err);
//         })
// })


//require node modules
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


//create the express app
const app = express();
//set the view engine to ejs
app.set('view engine','ejs');
app.use(express.static('public'));


//data base connection
const dburi = "mongodb+srv://sam:1234@cluster0.psmrc.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dburi, {useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>app.listen(3000,()=>console.log('listening on port 3000')))
    .catch((err)=>console.log("error connecting to the data base             ---------- "+err));

// //insert to the database
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title: "this is a new day",
//         snippet: "I would be packing my bags",
//         body: "i would be packing my bags when I need to stay I'd be chasing every breeze that blows my way , I'd be buildig my kingdom just to watch it fade away"
//     });
//     blog.save()
//         .then((result)=>res.send(result))
//         .catch((err)=>console.log(err));
// })

// //retrieve from the database
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//         .then((result)=>{res.send(result)})
//         .catch((err)=>{console.log(err)});
        
// })


// //retrieve one data from the database
// app.get('/single-blog',(req,res)=>{
//     Blog.findById('616efbb06bd0347fd544d742')
//         .then((result)=>res.send(result))
//         .catch((err)=>console.log(err))
// })


// blog routes
app.get('/',(req,res)=>{
    Blog.find().sort({createdAt: -1})
        .then((result)=>{
            res.render('index',{title: 'All Blogs',blogs:result})
        })
        .catch((err)=>console.log(err))
})


app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
})