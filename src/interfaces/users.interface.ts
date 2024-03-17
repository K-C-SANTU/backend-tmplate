export interface User {
    _id: string;
    name: string;
    phone: string;
    gender: 'male' | 'female' | 'other';
    email: string;
    password: string;
    is_active: boolean;
    create_by: string;
    updated_by: string | null;
    created_at: Date;
    updated_at: Date;
}
