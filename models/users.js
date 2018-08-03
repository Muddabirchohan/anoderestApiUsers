const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var fs = require('fs');


//createing loaction schema
// const GeoSchema = new Schema({

//     type : {
//         type: String,
//         default: "point"
//     },

//     coordinates: {
//         type: [Number],
//         index: "2dsphere"
//     },
// })


//creating ninja schema

const UserSchema = new Schema({

    name: {
        type: String,
        required: [true, "name fields is required"]
    },
    age: {
        type: Number,
    },
    gender: {
        type: String
    },
     image: {
      type: String,

     },
    // img: { data: Buffer, contentType: String },
    //geo loactions
    // geometry: GeoSchema
})

//Ninja is the model //ninja is collection in db //NinjaSchema is object 
const User = mongoose.model('userdatabase',UserSchema);
module.exports = User;