const express = require('express');
const router = express.Router();
const User = require('../models/users');
const multer = require('multer');




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    },

})


const upload = multer({storage: storage, limits: {
filesize: 1024*1024*5
} });

// router.get('/ninja', function (req, res,next) {

//     console.log(req.query)

//     Ninja.aggregate().near({
//         near: [req.query.lng, req.query.lat],
//         maxDistance: 100000,
//         spherical: true,
//         distanceField: "dist.calculated"
//        }).then(response =>{
//            res.send(response);
//        });
// })


router.get('/user', function (req, res, next) {
    User.find({}, function (err, users) {
        var userMap = {};
        users.forEach(function (user) {
            userMap[user._id] = user;
        });
        console.log(userMap);
        res.send(userMap);
    });
    // for single user
    //  Ninja.findById({_id: req.params.id}).then(function(ninja){
    // res.send(ninja)
    //  })

})

router.post('/user', upload.single('userimage'), function (req, res, next) {
    // console.log(req.file.filename);
    console.log(req.body);
    
    let userObject = {
        name : req.body.name,
        age : req.body.age,
        gender: req.body.gender,
        image :'http://localhost:4000/'+ req.file.filename
    }
    User.create(userObject).then(function (user) {
        // console.log(req.body)
        res.send(user)
    }).catch(next)

   res.send(userObject);
})


router.put('/user/:id', function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user)
        })
    })
})

router.delete('/user/:id', function (req, res, next) {
    console.log(req.params.id)
    User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send(user)
    })
})

module.exports = router;


