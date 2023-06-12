import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const assigntaskschema=mongoose.Schema({
_id:Number,
tasktitle:{
type:String,
required:[true,"task title required"],
lowercase:true,
trim:true
},
taskdescription:{
    type:String,
    required:[true,"task title required"],
    lowercase:true,
    trim:true
    },

});

assigntaskschema.plugin(uniqueValidator);
const assigntaskschemamodel=mongoose.model('assigns_collection',assigntaskschema);
export default assigntaskschemamodel;