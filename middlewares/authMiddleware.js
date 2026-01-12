import JWT from 'jsonwebtoken';
import userModel from '../models/User.js';

const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decode; 
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            success: false,
            message: "Invalid or expired token"
        });
    }
};


const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in admin middleware"
        });
    }
};

export { requireSignIn, isAdmin };