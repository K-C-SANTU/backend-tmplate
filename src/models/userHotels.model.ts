import { model, Schema, Document } from 'mongoose';
import { userHotels } from '@interfaces/userHotels.interface';

const userHotelsSchema: Schema = new Schema(
    {
        hote_id: {
            type: String,
        },
        user_email: {
            type: String,
            required: true,
        },
        is_active: {
            type: Boolean,
            default: 0,
        },
        create_by: {
            type: String,
            default: null,
        },
        updated_by: {
            type: String,
            default: null,
        },
        items: {
            type: Array,
            default: null,
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

userHotelsSchema.set('timestamps', true);

const userHotelsModel = model<userHotels & Document>('subItems', userHotelsSchema);

export default userHotelsModel;
