import { model, Schema, Document } from 'mongoose';
import { subItems } from '@interfaces/subItems.interface';

const subItemsSchema: Schema = new Schema(
    {
        hote_id: {
            type: String,
        },
        menu_id: {
            type: String,
        },
        item_name: {
            type: String,
        },
        item_price: {
            type: String,
            default: null,
        },
        from_time: {
            type: String,
            default: null,
        },
        to_time: {
            type: String,
            default: null,
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

subItemsSchema.set('timestamps', true);

const subItemsModel = model<subItems & Document>('subItems', subItemsSchema);

export default subItemsModel;
