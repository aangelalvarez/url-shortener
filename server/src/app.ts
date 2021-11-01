import express from 'express';
import cors from 'cors';
import { corsOrigin } from './config/config';
import indexRoutes from './routes/index';
import urlRoutes from './routes/url';
import findShortUrl from './routes/shortUrl'
import invalidRoutes from './routes/invalid';
import mongooseConnect from './database/database';
import requestInfo from './middleware/requestInfo';

const app: express.Application = express();
const PORT: string | number = process.env.PORT || 8000;
const HOST: string = process.env.HOST || 'localhost';

// database connection
mongooseConnect();

// middleware
app.use(cors({origin: corsOrigin}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(requestInfo);

// routes
app.use(indexRoutes); // => /
app.use(urlRoutes); // => /url
app.use(findShortUrl); // => /:shortUrl
app.use(invalidRoutes); // => Handle all invalid routes and methods

// server
app.listen(PORT, (): void => {
    console.log(`Server running on http://${HOST}:${PORT}`);
})
