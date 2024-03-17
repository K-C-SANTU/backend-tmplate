import { items } from './items.interface';

export interface menuType {
    _id: string;
    hotel_id: string;
    menu_name: string;
    from_time: string | null;
    to_time: string | null;
    is_active: boolean;
    create_by: string;
    updated_by: string | null;
    created_at: Date;
    updated_at: Date;
    items: items[] | null;
}
