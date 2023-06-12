    import '../models/connection.js';
import UserSchemamodel from '../models/user.models.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';



export const save=async (req,res,next)=>{
   var userlist= await UserSchemamodel.find().sort({"_id":-1});
   
   var _id=(userlist.length==0?1:userlist[0]._id+1);
console.log(userlist)
    var userDetails={...req.body,"_id":_id,"role":"user","status":0,"info":Date()};


  var user =await UserSchemamodel.create(userDetails) 
if(user)
return res.status(201).json({"status":true});
else
return res.status(500).json({"status":false});
}

export const fetch=async(req,res,next)=>{
var condition_object=url.parse(req.url,next).query;
var userlist=await UserSchemamodel.find(condition_object);
//var _id=(userlist.length==0?1:userlist[0]._id+1);
//var userDetails={...req.body,"_id":_id,"role":"user","status":0,"info":Date()};

//var user=await UserSchemamodel.create(userDetails)
if(userlist.length!=0)
return res.status(201).json(userlist);
else
return res.send(201).json(userlist);
}

export const deleteUser=async(req,res,next)=>{
  var condition_object=JSON.parse(req.body.condition_object)
  var user=await UserSchemamodel.find(condition_object)
  
  if(user.length!=0){

  let user=await UserSchemamodel.deleteMany(condition_object);

  if(result)
  return res.status(201).json({"msg":"record"});

  else
  return res.status(500).json({error:"server"});

    }
      else
      return res.status(404).json({error:"resource"});
  }


export const updateUser=async(req,res,next)=>{
  let userDetails = await UserSchemamodel.findOne(JSON.parse(req.body.condition_obj));
if(userDetails){
let user=await UserSchemamodel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});

if(user)
return res.status(201).json({"msg": "recorded update successfully"});

else
return res.send(500).json({error: "server"});

}
else
return res.send(404).json({error: "requested resource not available"});
}


export const login=async(req,res,next)=>{
var userDetails=req.body;
userDetails={...userDetails,"status":1};
var userlist=await UserSchemamodel.find(userlist);
if(userlist.lenght!=0)
{
let payload={"subject":userlist[0].email};
let key=rs.generate();
let token=jwt.sign(payload,key);
return res.status(201).json({"token":token,"userDetails":userlist[0]});
}
else

return res.status(201).json({"token":"error"})
}