import { HttpException } from '@exceptions/HttpException';
import hotelModel from '@models/hotels.model';
import { isEmpty } from '@utils/util';
import { Hotel } from '@/interfaces/hotels.interface';
import { CreateHotelDto } from '@/dtos/hotels.dto';

class HotelsService {
    public hotel = hotelModel;
    public async findAllHotel(): Promise<Hotel[]> {
        const users: Hotel[] = await this.hotel.find();
        return users;
    }

    public async findHotelById(hotel_id: string): Promise<Hotel> {
        if (isEmpty(hotel_id)) throw new HttpException(400, 'Hotel Id is empty');
        const findHotel: Hotel = await this.hotel.findOne({ _id: hotel_id });
        if (!findHotel) throw new HttpException(409, "Hotel doesn't exist");
        return findHotel;
    }

    public async createHotel(hotelData: CreateHotelDto): Promise<Hotel> {
        if (isEmpty(hotelData)) throw new HttpException(400, 'hotelData is empty');

        const createHotelData: Hotel = await this.hotel.create(hotelData);

        return createHotelData;
    }
}
export default HotelsService;
