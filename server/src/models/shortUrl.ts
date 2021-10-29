import mongoose, { Document } from "mongoose";
import { IShortUrl } from "../types/shortUrl";

const shortUrlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
    },
    url: {
        type: String,
    }
});

const ShortUrl = mongoose.model<IShortUrl>("shortUrl", shortUrlSchema);

export default ShortUrl;