import { IsEmail, IsString } from 'class-validator';

export class CreateHotelDto {
    @IsString()
    public hotel_name: string;

    @IsString()
    public hotel_address: string;

    @IsEmail()
    public created_by: string;
}
