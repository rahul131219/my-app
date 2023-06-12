import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const groupSchema=mongoose.Schema({
_id:Number,
gname:{
type:String,
required:[true,"group name required"],
lowercase:true,
trim:true
},
});

groupSchema.plugin(uniqueValidator);

const groupSchemamodel=mongoose.model('group_collection',groupSchema);


export default groupSchemamodel;