import * as express from 'express';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import Controller from '../interfaces/controller';
import Property from './property.entity';
import Booking from '../booking/booking.entity';

class PropertyController implements Controller {
    public path = '/property';
    public router = express.Router();
    private propertyRepository = getRepository(Property);
    private bookingRepository = getRepository(Booking);

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router
            .get('/', this.getProperty)
            .get('/:id/bookings', this.getPropertyBookings);
    }

    private getProperty = async (req: Request, res: Response, next: NextFunction) => {
        if (!req.query.at) {
            res.status(400);
            next(new Error('Required query params missing'));
            return;
        }

        const [lat, lon] = (req.query.at as string).split(',');
        const query = 'ST_Distance(lat_lon, ST_MakePoint(:lon,:lat)) <= :dist * 1000';
        const properties = await this.propertyRepository
            .createQueryBuilder('property')
            .where(query, { lat: lat, lon: lon, dist: 500 })
            .getMany();

        res.send(properties);
    }

    private getPropertyBookings = async (req: Request, res: Response) => {
        const bookings = await this.bookingRepository.findOne(req.params.id, { relations: ['property'] });
        res.send(bookings);
    }
}

export default PropertyController;
