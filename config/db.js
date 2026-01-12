import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `connected to Mongodb Database ${connection.connection.host}`.bgRed.white);

    } catch(error) {
        console.log(`Error in Mongodb ${error}`.bgBlue.white);
    }
};

export default connectDB;