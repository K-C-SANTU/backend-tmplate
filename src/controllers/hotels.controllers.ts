import { NextFunction, Request, Response } from 'express';
import { CreateHotelDto } from '@/dtos/hotels.dto';
import { hotel } from '@interfaces/hotels.interface';
import hotelService from '@services/hotels.service';

class HotelsController {
    public hotelService = new hotelService();

    public getHotels = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllHotelsData: hotel[] = await this.hotelService.findAllHotel();
            res.status(200).json({ data: findAllHotelsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getHotelById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotel_id: string = req.params.id;
            const findOneHotelData: hotel = await this.hotelService.findHotelById(hotel_id);

            res.status(200).json({ data: findOneHotelData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createHotel = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelData: CreateHotelDto = req.body;
            const createHotelData: hotel = await this.hotelService.createHotel(hotelData);

            res.status(201).json({ data: createHotelData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };
}

export default HotelsController;
