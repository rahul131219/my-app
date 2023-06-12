import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const submitschema=mongoose.Schema({
_id:Number,
stitle:{
type:String,
required:[true,"stitle required"],
lowercase:true,
trim:true
},

groupname:{
type:String,
required:[true,"groupname required"],
unique:true,
lowercase:true,
trim:true
},
tdescription:{
type:String,
required:[true,"task description required"],
trim:true
},
filename:{
    type:String,
    required:[true,"file description required"],
    trim:true
    },
    info:String,
    });

submitschema.plugin(uniqueValidator);
const submitschemamodel=mongoose.model('submit_collections',submitschema);

export default submitschemamodel;
