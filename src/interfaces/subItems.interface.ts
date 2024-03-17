export interface subItems {
    _id: string;
    hotel_id: string;
    menu_id: string | string[];
    item_id: string | string[];
    item_name: string;
    item_price: number | null;
    from_time: string | null;
    to_time: string | null;
    is_active: boolean;
    create_by: string;
    updated_by: string | null;
    created_at: Date;
    updated_at: Date;
}
