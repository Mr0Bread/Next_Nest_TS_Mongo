import { Document } from 'mongoose';
import IUser from 'App/users/interfaces/user.interface';

export default interface IUserDocument extends Document, IUser {}
