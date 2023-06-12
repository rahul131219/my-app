import '../models/connection.js';
import taskassignSchemamodel from '../models/assign_task.models.js';
import url from 'url';

export const save=async(req,res,next)=>{

    var taskassignlist=await taskassignSchemamodel.find().sort({"_id":-1});
    var _id=(taskassignlist.length==0?1:taskassignlist[0]._id+1);
    var taskassignDetails={...req.body,"_id":_id};
    var p= await taskassignSchemamodel.create(taskassignDetails);
    if(p)
    return res.status(201).json({"status":true});
    else
    return res.status(500).json({"status":false});
}


export const fetch=async(req,res,next)=>{
var condition_object=url.parse(req.url,true).query;
var taskassignlist=await taskassignSchemamodel.find(condition_object);
if(taskassignlist.length!=0)

return res.status(201).json(taskassignlist);

else

    return res.status(201).json({"error":"resources not found"});

}

export const deleteassign=async(req,res,next)=>{
var condition_object=JSON.parse(req.body.condition_object);
var taskassignlist=await taskassignSchemamodel.find(condition_object);
if(taskassignlist.length!=0)
{
    let result=await taskassignSchemamodel.deleteMany(condition_object);

if(result)

    return res.status(201).json({"msg":"record deleted successfully"});
else
return res.status(500).json({error:"server error"});
}
else
return res.status(404).json({error:"resource not found"});

}

export const updateassign=async(req,res,next)=>{
    var pDetails=await taskassignSchemamodel.findOne(JSON.parse(req.body.condition_object));
if(pDetails)
{
    let result=await taskassignSchemamodel.updateOne(JSON.parse(req.body.condition_object),{$set:JSON.parse(req.body.content_object)});


if(result)

return res.status(201).json({"msg":"record update successfully"});
else
return res.status(500).json({error:"server error"})

}
else
return res.status(404).json({error:"requested resource not available"});

}


