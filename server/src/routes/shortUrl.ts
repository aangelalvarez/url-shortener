import Router, { Request, Response } from 'express';
import ShortUrl from '../models/shortUrl';
const router = Router();

router.route('/:shortUrl')
.get(async(req: Request, res: Response): Promise<Router.Response<any, Record<string, any>> | undefined | void> => {
    try {
        const found: any = await ShortUrl.findOne({shortUrl: req.params.shortUrl});
        if (!found) return res.status(404).send('Invalid URL');
        return res.redirect(found.url);

    } catch (e) {
        res.send(e);
    }
})

export default router;