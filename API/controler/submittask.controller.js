import '../models/connection.js';

import submitschemamodel from '../models/submittask.model.js';
import url from 'url';

export const save=async(req,res,next)=>{
var submitlist=await submitschemamodel.find().sort({"_id":-1});
var _id=(submitlist.length==0?1:submitlist[0]._id+1);
var submitDetails={...req.body,"_id":_id,"info":Date()};
var s=await submitschemamodel.create(submitDetails); 
if(s)
return res.status(201).json({"status":true});
else
return res.status(500).json({"status":false});
}

export const fetch=async(req,res,next)=>{
var condition_obj=url.parse(req.url,true).query;
var submitlist=await submitschemamodel.find(condition_obj);
if(submitlist.length!=0)
return res.status(201).json(submitlist);
else
return res.status(500).json({error:"no id found"})

}

export const deletesubmit=async(req,res,next)=>{
   var condition_obj=JSON.parse(req.body.condition_obj);
   var submitlist=await submitschemamodel.find(condition_obj);
   if(submitlist!=0){
      var result=submitschemamodel.deleteMany(condition_obj);
      
      if(result)
   
      return res.status(201).json({"msg":"record delete successfully"});
      else 
      return res.status(500).json({error:"server error"})
   }
   else
   return res.status(404).json({error:"resource not found"});
   }

   export const updatesubmit=async(req,res,next)=>{
 var submitDetails=await submitschemamodel.fondOne(JSON.parse(req.body.condition_obj));
 if(submitDEtails)
 let result =await submitschemamodel.updateOne(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)});
 
     

    





   }











