import Router from "express";
import { Request, Response } from 'express';
import ShortUrl from "../models/shortUrl";
import { IShortUrl } from "../types/shortUrl"
import sha256Short from "../functions/sha256Short";

const router = Router();

router.route('/url')
.post(async(req: Request, res: Response): Promise<Router.Response<any, Record<string, any>> | undefined> => {
    try {
        const exists: IShortUrl | null = await ShortUrl.findOne({url: req.body.url});
        if (exists) return res.status(200).send(exists);
        else {
            const shortURL: string = sha256Short(req.body.url);
            const newUrl = await ShortUrl.create({
                shortUrl: shortURL,
                url: req.body.url
            });

            return res.send(newUrl);
        }
        
    } catch(e) {
        return res.send(e);
    }
});

export default router;
