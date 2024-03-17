export interface userHotels {
    _id: string;
    hotel_id: string;
    user_email: string;
    is_active: boolean;
    create_by: string;
    updated_by: string | null;
    created_at: Date;
    updated_at: Date;
}
