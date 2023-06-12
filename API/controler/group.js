import '../models/connection.js';
import groupSchemamodel from '../models/group.model.js';
import url from 'url';

export const save=async(req,res,next)=>{

    var grouplist=await groupSchemamodel.find().sort({"_id":-1});
    var _id=(grouplist.length==0?1:grouplist[0]._id+1);
    var groupDetails={...req.body,"_id":_id};
    var p= await groupSchemamodel.create(groupDetails);
    if(p)
    return res.status(201).json({"status":true});
    else
    return res.status(500).json({"status":false});
}


export const fetch=async(req,res,next)=>{
var condition_object=url.parse(req.url,true).query;
var grouplist=await groupSchemamodel.find(condition_object);
if(grouplist.length!=0)

return res.status(201).json(grouplist);

else

    return res.status(201).json({"error":"resources not found"});

}

export const deletegroup=async(req,res,next)=>{
var condition_object=JSON.parse(req.body.condition_object);
var grouplist=await groupSchemamodel.find(condition_object);
if(grouplist.length!=0)
{
    let result=await groupSchemamodel.deleteMany(condition_object);

if(result)

    return res.status(201).json({"msg":"record deleted successfully"});
else
return res.status(500).json({error:"server error"});
}
else
return res.status(404).json({error:"resource not found"});

}

export const updategroup=async(req,res,next)=>{
    var pDetails=await groupSchemamodel.findOne(JSON.parse(req.body.condition_object));
if(pDetails)
{
    let result=await groupSchemamodel.updateOne(JSON.parse(req.body.condition_object),{$set:JSON.parse(req.body.content_object)});


if(result)

return res.status(201).json({"msg":"record update successfully"});
else
return res.status(500).json({error:"server error"})

}
else
return res.status(404).json({error:"requested resource not available"});

}


