import Req from "../models/requestInfo";
import { Request, Response, RequestHandler, NextFunction } from 'express';
import { getDateTime } from '../functions/date';

const requestInfo: RequestHandler = async(req: Request, res: Response, next: NextFunction) => {
    
    const currReqInfo = new Req({
        method: req.method,
        route: req.path,
        date: getDateTime()
    });

    await currReqInfo.save();

    next();
};

export default requestInfo;