import express from 'express';
const router=express.Router();

import * as pController from '../controler/project.controller.js';

router.post("/save",pController.save);

router.get("/fetch",pController.fetch);

router.delete("/delete",pController.deleteproject);

router.patch("/update",pController.updateproject);

export default router;