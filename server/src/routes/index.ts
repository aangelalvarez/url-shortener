import Router from "express";
import { Request, Response } from 'express';

const router = Router();

router.route('/')
.get((req: Request, res: Response): Response<any, Record<string, any>> => {
    return res.status(200).send("API is working");
});

export default router;