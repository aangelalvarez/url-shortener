import Router from "express";
import { Request, Response } from 'express';
import ShortUrl from "../models/shortUrl";
import { IShortUrl } from "../types/shortUrl"
import sha256Short from "../functions/sha256Short";

const router = Router();

router.route('/url')
.post(async(req: Request, res: Response): Promise<Router.Response<any, Record<string, any>> | undefined> => {
    if (!req.body.url) return res.send('URL is required');

    try {
        const exists: IShortUrl | null = await ShortUrl.findOne({url: req.body.url});
        if (exists) return res.status(200).send('URL already exists');
        else {
            const shortURL: string = sha256Short(req.body.url);
            await ShortUrl.create({
                shortUrl: shortURL,
                url: req.body.url
            }).then(() => {
                return res.status(200).send(`Successfully created short URL`);
            });
        }
        
    } catch(e) {
        return res.send(e);
    }
});

export default router;
