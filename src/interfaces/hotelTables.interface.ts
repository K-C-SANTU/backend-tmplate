export interface hotelTables {
    _id: string;
    hotel_id: string;
    table_number: string;
    number_of_seats: number;
    live_sync_up_products: boolean;
    qr_code_order: boolean;
    is_active: boolean;
    create_by: string;
    updated_by: string | null;
    created_at: Date;
    updated_at: Date;
}
