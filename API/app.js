import express from 'express';

import bodyParser from 'body-parser';

const app=express();

import Userrouter from './userrouters/userrouter.js';

import projectrouter from './userrouters/router.js';

import grouprouter from './userrouters/group.router.js';

import assignrouter from './userrouters/assign_task.router.js';

import submitrouter from './userrouters/task_submission.js';
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use('/user',Userrouter);

app.use('/project',projectrouter);

app.use('/group',grouprouter);

app.use('/assign',assignrouter);

app.use('/submit',submitrouter);


app.listen(3001);

console.log("url invoked http://localhost:3001");







