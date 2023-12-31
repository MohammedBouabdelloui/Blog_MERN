import mongoose, { Schema ,Model } from "mongoose";

const UserSchem  = new Schema({
    username : {type: String , require: true , min: 4 , unique : true},
    password : {min : 8 , require : true}
})

const UserModel = Model('User' , UserSchem) ;

module.exports = UserModel ;
