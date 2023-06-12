import express from 'express';


const router=express.Router();

import * as Usercontroler from '../controler/usercontroler.js';

router.post('/save',Usercontroler.save);

router.get('/fetch',Usercontroler.fetch);

router.delete('/delete',Usercontroler.deleteUser);

router.patch('/update',Usercontroler.updateUser);

router.post('/login',Usercontroler.login)




export default router;






