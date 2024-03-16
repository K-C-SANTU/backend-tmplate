export interface Hotel {
    _id: string;
    hotel_name: string;
    hotel_address: string;
    hotel_branch: string | null;
    is_active: boolean;
    created_by: string;
    updated_by: string | null;
    created_at: Date;
    update_at: Date | null;
}
