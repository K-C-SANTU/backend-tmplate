import { model, Schema, Document } from 'mongoose';
import { hotelTables } from '@interfaces/hotelTables.interface';

const hotelTablesSchema: Schema = new Schema(
    {
        hotel_id: {
            type: String,
        },
        table_number: {
            type: String,
        },
        number_of_seats: {
            type: String,
        },
        live_sync_up_products: {
            type: Boolean,
        },
        qr_code_order: {
            type: Boolean,
        },
        is_active: {
            type: Boolean,
        },
        created_by: {
            type: String,
            default: null,
        },
        updated_by: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

hotelTablesSchema.set('timestamps', true);
const hotelTablesModel = model<hotelTables & Document>('hotelTables', hotelTablesSchema);
export default hotelTablesModel;
