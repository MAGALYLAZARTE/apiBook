import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';
import dotenv from 'dotenv';

dotenv.config();

export const tokenSing = async (user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
           
        },
        JWT_SECRET,
        {
            expiresIn: "87600h",
        }
    );
    return sign;
}

export const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (e) {
        return null;
    }
}