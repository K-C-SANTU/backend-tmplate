import { model, Schema, Document } from 'mongoose';
import { user } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const userModel = model<user & Document>('User', userSchema);
export default userModel;
