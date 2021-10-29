import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../config/.env')});
const URL: string = (process.env.DB_URL as string);

const mongooseConnect = async() => {
    try {
        await mongoose.connect(URL)
        .then(() => {
            console.log('Successfully connected to the database');
        });
    } catch (e) {
        console.error(e);
    }
};

export default mongooseConnect;