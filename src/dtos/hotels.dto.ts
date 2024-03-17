import { IsEmail, IsString, IsOptional } from 'class-validator';

export class CreateHotelDto {
    @IsString()
    public hotel_name: string;

    @IsString()
    public hotel_address: string;

    @IsEmail()
    public created_by: string;
}
export class UpdateHotelDto {
    @IsString()
    public _id: string;

    @IsString()
    @IsOptional()
    public hotel_name: string;

    @IsString()
    @IsOptional()
    public hotel_address: string;

    @IsEmail()
    public updated_by: string;
}
