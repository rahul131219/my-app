import express from 'express';

const router=express.Router();

import * as gController from '../controler/group.js';

router.post("/save",gController.save);

router.get("/fetch",gController.fetch);

router.delete("/delete",gController.deletegroup);

router.patch("/update",gController.updategroup);

export default router;

