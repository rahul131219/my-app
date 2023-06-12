import express from 'express';

const router=express.Router();

import * as sController from '../controler/submittask.controller.js';

router.post("/save",sController.save);

router.get("/fetch",sController.fetch);

router.delete("/delete",sController.deletesubmit);

router.patch("/update",sController.updatesubmit);

export default router;



