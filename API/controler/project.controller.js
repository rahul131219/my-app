    import '../models/connection.js';
import projectSchemamodel from '../models/project.model.js';
import url from 'url';

export const save=async(req,res,next)=>{

    var projectlist=await projectSchemamodel.find().sort({"_id":-1});
    var _id=(projectlist.length==0?1:projectlist[0]._id+1);
    var projectDetails={...req.body,"_id":_id};
    var p= await projectSchemamodel.create(projectDetails);
    if(p)
    return res.status(201).json({"status":true});
    else
    return res.status(500).json({"status":false});
}


export const fetch=async(req,res,next)=>{
var condition_object=url.parse(req.url,true).query;
var projectlist=await projectSchemamodel.find(condition_object);
if(projectlist.length!=0)

return res.status(201).json(projectlist);

else

    return res.status(201).json({"error":"resources not found"});

}

export const deleteproject=async(req,res,next)=>{
var condition_object=JSON.parse(req.body.condition_object);
var projectlist=await projectSchemamodel.find(condition_object);
if(projectlist.length!=0)
{
    let result=await projectSchemamodel.deleteMany(condition_object);

if(result)

    return res.status(201).json({"msg":"record deleted successfully"});
else
return res.status(500).json({error:"server error"});
}
else
return res.status(404).json({error:"resource not found"});

}

export const updateproject=async(req,res,next)=>{
    var pDetails=await projectSchemamodel.findOne(JSON.parse(req.body.condition_object));
if(pDetails)
{
    let result=await projectSchemamodel.updateOne(JSON.parse(req.body.condition_object),{$set:JSON.parse(req.body.content_object)});


if(result)

return res.status(201).json({"msg":"record update successfully"});
else
return res.status(500).json({error:"server error"})

}
else
return res.status(404).json({error:"requested resource not available"});

}


