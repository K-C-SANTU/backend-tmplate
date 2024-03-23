import { HttpException } from '@exceptions/HttpException';
import hotelModel from '@models/hotels.model';
import { isEmpty } from '@utils/util';
import { hotel } from '@/interfaces/hotels.interface';
import { CreateHotelDto } from '@/dtos/hotels.dto';

class HotelsService {
    public hotel = hotelModel;
    public async findAllHotel(): Promise<hotel[]> {
        const users: hotel[] = await this.hotel.find();
        return users;
    }

    public async findHotelById(hotel_id: string): Promise<hotel> {
        if (isEmpty(hotel_id)) throw new HttpException(400, 'Hotel Id is empty');
        const findHotel: hotel = await this.hotel.findOne({ _id: hotel_id });
        if (!findHotel) throw new HttpException(409, "Hotel doesn't exist");
        return findHotel;
    }

    public async createHotel(hotelData: CreateHotelDto): Promise<hotel> {
        if (isEmpty(hotelData)) throw new HttpException(400, 'hotelData is empty');

        const createHotelData: hotel = await this.hotel.create(hotelData);

        return createHotelData;
    }
}
export default HotelsService;
