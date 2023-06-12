import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const projectSchema=mongoose.Schema({
_id:Number,
ptitle:{
type:String,
required:[true,"gnumber is required"],
lowercase:true,
unique:true,
trim:true
},
pstream:{
    type:String,
    required:[true,"gnumber is required"],
    lowercase:true,
    
    trim:true
    },
    pdescription:{
        type:String,
        required:[true,"gnumber is required"],
        lowercase:true,
        unique:true,
        trim:true
        },
        
    
});
projectSchema.plugin(uniqueValidator);
const projectSchemamodel=mongoose.model('project_collection',projectSchema);

export default projectSchemamodel;