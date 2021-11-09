import express from 'express';
import { signup, login } from '../controllers';
import { validate, signupValidate, loginValidate } from '../middleware';

const userRouter = express.Router();

userRouter.post('/signup', signupValidate(), validate, signup);
userRouter.post('/login', loginValidate(), validate, login);

export default userRouter;
