import mongoose from 'mongoose';
import { IRequestInfo } from '../types/requestInfo';

const requestInfoSchema = new mongoose.Schema({
    method: String,
    route: String,
    date: String
});

const Req = mongoose.model<IRequestInfo>('request', requestInfoSchema);

export default Req;