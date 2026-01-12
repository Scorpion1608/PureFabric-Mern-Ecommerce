import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors'

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5003;

app.use('/api/v1/auth', authRoute);

app.get('/', (req,res) => {
    res.send("<h1>Welcome to E-Commerce app</h1>");
});

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} run mode on port  ${PORT}`.bgGreen.white);
});