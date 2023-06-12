import mongoose from 'mongoose';

var url="mongodb://127.0.0.1:27017/PMS";

mongoose.connect(url);

console.log("successfully connected to mongodb database");





