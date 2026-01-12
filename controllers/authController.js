import User from '../models/User.js';
import { comparePassword, hashPassword } from '../supporters/authSupporter.js';
import JWT from 'jsonwebtoken';

const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Validation
        if (!name) {
            return res.status(400).send({ message: 'Name is Required' });
        }
        if (!email) {
            return res.status(400).send({ message: 'Email is Required' });
        }
        if (!password) {
            return res.status(400).send({ message: 'Password is Required' });
        }
        if (!phone) {
            return res.status(400).send({ message: 'Phone is Required' });
        }
        if (!address) {
            return res.status(400).send({ message: 'Address is Required' });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: 'Already Registered please login'
            });
        }

        const hashedPwd = await hashPassword(password);

        const user = await new User({
            name,
            email,
            phone,
            address,
            password: hashedPwd
        }).save();

        res.status(201).send({
            success: true,
            message: 'User Registered Successfully!',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        });

    } catch (error) {
        console.log("Registration Error:", error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error: error.message
        });
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body; 

        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Email and password are required'
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered'
            });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(401).send({ 
                success: false,
                message: 'Invalid Password'
            });
        }

        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(200).send({
            success: true,
            message: 'Login successfully',
            token: token, 
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address, 
            },
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error: error.message,
        });
    }
};


const testController = (req, res) => {
    console.log("protected Route");
    res.status(200).send({
        success: true,
        message: 'Protected route accessed successfully'
    });
};

export { registerController, loginController, testController };