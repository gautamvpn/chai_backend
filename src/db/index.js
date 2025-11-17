
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async()=>{
        try{
           const DBConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log(`DataBase has been connected at host ---`,DBConnectionInstance.connection.host);

        }catch(err){
            console.log(`getting error while connection DB. `,err);
            process.exit(1);
        }
    }

export default connectDB;   