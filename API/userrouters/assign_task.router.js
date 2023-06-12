import express from 'express';

const router=express.Router();

import * as taskcontroller  from '../controler/assign_task.controller.js';

router.post("/save" ,taskcontroller.save);

router.get("/fetch" ,taskcontroller.fetch);

router.delete("/delete", taskcontroller.deleteassign);

router.patch("/update",taskcontroller.updateassign);

export default router;

