const express = require('express');
const routers = require('./routers/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer');
const upload = multer({ dest : '/uploads/'});


app.use(bodyParser.json());

//initializing routes
app.use('/api',routers);


app.use(express.static('uploads'));
//
app.use(express.static('public'));

//error handling
app.use(function(err,req,res,next){
    // console.log(err);
    res.status(422).send({error: err.message});
})


mongoose.connect('mongodb://localhost/userData');
mongoose.Promise = global.Promise;
//sending an object to localhost

// app.get('/',function(req,res){
//     res.send({name : 'chohan'})
//     console.log("running at port 400")
// })

app.listen(process.env.PORT || 4000,function(){
    console.log("now listening for requests");
})
